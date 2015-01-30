from ipware.ip import get_real_ip
from datetime import timedelta

from django.conf import settings
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.views.generic.edit import UpdateView
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.views.decorators.http import require_POST
from django.utils import timezone

from app.event.models import Registration
from app.message.models import Thread, Message

from .forms import ProfileForm
from .models import Profile
from .utils import AjaxableResponseMixin, template_email

def logout_view(req):
    if req.user.is_authenticated():
        logout(req)

    next_url = req.GET.get('next', '/')
    return HttpResponseRedirect(next_url)

def index(req):
    if settings.DEBUG:
        template = 'magnovite/home.html'
    else:
        template = 'magnovite/dist/home.html'

    return render(req, template)


@require_POST
@login_required
def add_message(req):
    content = req.POST.get('text', '')
    if content == '':
        return JsonResponse({
            'errorCode': 'invalid_request',
            'errorMessage': 'Invalid request, no text parameter'
        }, status=400)

    thread, created = Thread.objects.get_or_create(profile=req.user.profile)

    # rate limit
    if (thread.is_pending):
        last_staff_msg = Message.objects.filter(is_staff=True, thread=thread.id)
        ratelimit_hour = timezone.now() - timedelta(hours=6)

        time_check = ratelimit_hour
        if (last_staff_msg and last_staff_msg[0].timestamp > ratelimit_hour):
            # chose last hour, or the last time a staff replied
            time_check = last_staff_msg.timestamp

        count = Message.objects.filter(timestamp__gt=time_check).count()

        if (count >= 5):
            return JsonResponse({
                'errorCode': 'ratelimit',
                'errorMessage': 'Please wait for a response before trying to send further requests.'
            }, status=400)

    thread.is_pending = True
    thread.save()

    message = Message(thread=thread, content=content)
    message.save()

    template_email('help@magnovite.net', settings.HELP_INCHARGE,
                   '[Mag:help] : ' + req.user.email,
                   'admin_help_request',
                   {'user': req.user.profile, 'message': message})

    return HttpResponse(status=200)


@login_required
def profile(req):
    if settings.DEBUG:
        template = 'magnovite/profile.html'
    else:
        template = 'magnovite/dist/profile.html'


    profile_form = ProfileForm(instance=req.user.profile)

    registrations = Registration.objects.filter(profile=req.user.profile)
    day_one = map(lambda x: x.event, registrations.filter(event__date=21))
    day_two = map(lambda x: x.event, registrations.filter(event__date=22))

    # evaluate maps
    day_one = [x for x in day_one]
    day_two = [x for x in day_two]

    messages = []
    try:
        messages = req.user.profile.thread.messages.all()
    except:
        pass

    owned_teams = []
    for obj in Registration.objects.filter(profile=req.user.profile, is_owner=True):
        event = obj.event
        num_members = Registration.objects.filter(team_id=obj.team_id).count()

        owned_teams.append((event, num_members))

    return render(req, template, {
        'profile_form': profile_form,
        'days': [day_one, day_two],
        'help_messages': messages,
        'owned_teams': owned_teams
    })


class ProfileUpdate(AjaxableResponseMixin, UpdateView):
    model = Profile
    form_class = ProfileForm
    http_method_names = ['post']

profile_update_view = ProfileUpdate.as_view()
