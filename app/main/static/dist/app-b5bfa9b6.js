var module,countdown=function(t){function e(t,e){var i=t.getTime();return t.setUTCMonth(t.getUTCMonth()+e),Math.round((t.getTime()-i)/864e5)}function i(t){var e=t.getTime(),i=new Date(e);return i.setUTCMonth(t.getUTCMonth()+1),Math.round((i.getTime()-e)/864e5)}function n(t,e){return t+" "+(1===t?r[e]:l[e])}function s(){}function a(t,e,n,s,a,o){if(0<=t[n]&&(e+=t[n],delete t[n]),e/=a,1>=e+1)return 0;if(0<=t[s]){switch(t[s]=+(t[s]+e).toFixed(o),s){case"seconds":if(60!==t.seconds||isNaN(t.minutes))break;t.minutes++,t.seconds=0;case"minutes":if(60!==t.minutes||isNaN(t.hours))break;t.hours++,t.minutes=0;case"hours":if(24!==t.hours||isNaN(t.days))break;t.days++,t.hours=0;case"days":if(7!==t.days||isNaN(t.weeks))break;t.weeks++,t.days=0;case"weeks":if(t.weeks!==i(t.refMonth)/7||isNaN(t.months))break;t.months++,t.weeks=0;case"months":if(12!==t.months||isNaN(t.years))break;t.years++,t.months=0;case"years":if(10!==t.years||isNaN(t.decades))break;t.decades++,t.years=0;case"decades":if(10!==t.decades||isNaN(t.centuries))break;t.centuries++,t.decades=0;case"centuries":if(10!==t.centuries||isNaN(t.millennia))break;t.millennia++,t.centuries=0}return 0}return e}function o(t,n,s,o,h,r){if(t.start=n,t.end=s,t.units=o,t.value=s.getTime()-n.getTime(),0>t.value){var l=s;s=n,n=l}t.refMonth=new Date(n.getFullYear(),n.getMonth(),15);try{t.millennia=0,t.centuries=0,t.decades=0,t.years=s.getUTCFullYear()-n.getUTCFullYear(),t.months=s.getUTCMonth()-n.getUTCMonth(),t.weeks=0,t.days=s.getUTCDate()-n.getUTCDate(),t.hours=s.getUTCHours()-n.getUTCHours(),t.minutes=s.getUTCMinutes()-n.getUTCMinutes(),t.seconds=s.getUTCSeconds()-n.getUTCSeconds(),t.milliseconds=s.getUTCMilliseconds()-n.getUTCMilliseconds();var u;for(0>t.milliseconds?(u=c(-t.milliseconds/1e3),t.seconds-=u,t.milliseconds+=1e3*u):1e3<=t.milliseconds&&(t.seconds+=d(t.milliseconds/1e3),t.milliseconds%=1e3),0>t.seconds?(u=c(-t.seconds/60),t.minutes-=u,t.seconds+=60*u):60<=t.seconds&&(t.minutes+=d(t.seconds/60),t.seconds%=60),0>t.minutes?(u=c(-t.minutes/60),t.hours-=u,t.minutes+=60*u):60<=t.minutes&&(t.hours+=d(t.minutes/60),t.minutes%=60),0>t.hours?(u=c(-t.hours/24),t.days-=u,t.hours+=24*u):24<=t.hours&&(t.days+=d(t.hours/24),t.hours%=24);0>t.days;)t.months--,t.days+=e(t.refMonth,1);if(7<=t.days&&(t.weeks+=d(t.days/7),t.days%=7),0>t.months?(u=c(-t.months/12),t.years-=u,t.months+=12*u):12<=t.months&&(t.years+=d(t.months/12),t.months%=12),10<=t.years&&(t.decades+=d(t.years/10),t.years%=10,10<=t.decades&&(t.centuries+=d(t.decades/10),t.decades%=10,10<=t.centuries&&(t.millennia+=d(t.centuries/10),t.centuries%=10))),n=0,!(1024&o)||n>=h?(t.centuries+=10*t.millennia,delete t.millennia):t.millennia&&n++,!(512&o)||n>=h?(t.decades+=10*t.centuries,delete t.centuries):t.centuries&&n++,!(256&o)||n>=h?(t.years+=10*t.decades,delete t.decades):t.decades&&n++,!(128&o)||n>=h?(t.months+=12*t.years,delete t.years):t.years&&n++,!(64&o)||n>=h?(t.months&&(t.days+=e(t.refMonth,t.months)),delete t.months,7<=t.days&&(t.weeks+=d(t.days/7),t.days%=7)):t.months&&n++,!(32&o)||n>=h?(t.days+=7*t.weeks,delete t.weeks):t.weeks&&n++,!(16&o)||n>=h?(t.hours+=24*t.days,delete t.days):t.days&&n++,!(8&o)||n>=h?(t.minutes+=60*t.hours,delete t.hours):t.hours&&n++,!(4&o)||n>=h?(t.seconds+=60*t.minutes,delete t.minutes):t.minutes&&n++,!(2&o)||n>=h?(t.milliseconds+=1e3*t.seconds,delete t.seconds):t.seconds&&n++,!(1&o)||n>=h){var m=a(t,0,"milliseconds","seconds",1e3,r);if(m&&(m=a(t,m,"seconds","minutes",60,r))&&(m=a(t,m,"minutes","hours",60,r))&&(m=a(t,m,"hours","days",24,r))&&(m=a(t,m,"days","weeks",7,r))&&(m=a(t,m,"weeks","months",i(t.refMonth)/7,r))){o=m;var f,g=t.refMonth,y=g.getTime(),p=new Date(y);if(p.setUTCFullYear(g.getUTCFullYear()+1),f=Math.round((p.getTime()-y)/864e5),(m=a(t,o,"months","years",f/i(t.refMonth),r))&&(m=a(t,m,"years","decades",10,r))&&(m=a(t,m,"decades","centuries",10,r))&&(m=a(t,m,"centuries","millennia",10,r)))throw Error("Fractional unit overflow")}}}finally{delete t.refMonth}return t}function h(t,e,i,n,a){var h;if(i=+i||222,n=n>0?n:0/0,a=a>0?20>a?Math.round(a):20:0,"function"==typeof t?(h=t,t=null):t instanceof Date||(t=null!==t&&isFinite(t)?new Date(t):null),"function"==typeof e?(h=e,e=null):e instanceof Date||(e=null!==e&&isFinite(e)?new Date(e):null),!t&&!e)return new s;if(!h)return o(new s,t||new Date,e||new Date,i,n,a);var r,l=1&i?1e3/30:2&i?1e3:4&i?6e4:8&i?36e5:16&i?864e5:6048e5,u=function(){h(o(new s,t||new Date,e||new Date,i,n,a),r)};return u(),r=setInterval(u,l)}var r,l,u,c=Math.ceil,d=Math.floor;return s.prototype.toString=function(){var t=u(this),e=t.length;return e?(e>1&&(t[e-1]="and "+t[e-1]),t.join(", ")):""},s.prototype.toHTML=function(t){t=t||"span";var e=u(this),i=e.length;if(!i)return"";for(var n=0;i>n;n++)e[n]="<"+t+">"+e[n]+"</"+t+">";return--i&&(e[i]="and "+e[i]),e.join(", ")},u=function(t){var e=[],i=t.millennia;return i&&e.push(n(i,10)),(i=t.centuries)&&e.push(n(i,9)),(i=t.decades)&&e.push(n(i,8)),(i=t.years)&&e.push(n(i,7)),(i=t.months)&&e.push(n(i,6)),(i=t.weeks)&&e.push(n(i,5)),(i=t.days)&&e.push(n(i,4)),(i=t.hours)&&e.push(n(i,3)),(i=t.minutes)&&e.push(n(i,2)),(i=t.seconds)&&e.push(n(i,1)),(i=t.milliseconds)&&e.push(n(i,0)),e},h.MILLISECONDS=1,h.SECONDS=2,h.MINUTES=4,h.HOURS=8,h.DAYS=16,h.WEEKS=32,h.MONTHS=64,h.YEARS=128,h.DECADES=256,h.CENTURIES=512,h.MILLENNIA=1024,h.DEFAULTS=222,h.ALL=2047,h.setLabels=function(t,e){t=t||[],t.split&&(t=t.split("|")),e=e||[],e.split&&(e=e.split("|"));for(var i=0;10>=i;i++)r[i]=t[i]||r[i],l[i]=e[i]||l[i]},(h.resetLabels=function(){r="millisecond second minute hour day week month year decade century millennium".split(" "),l="milliseconds seconds minutes hours days weeks months years decades centuries millennia".split(" ")})(),t&&t.exports?t.exports=h:"function"==typeof window.define&&window.define.amd&&window.define("countdown",[],function(){return h}),h}(module),app=app||{},util={extend:function(t,e){"use strict";for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}};app.util=util,Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),i=this,n=function(){},s=function(){return i.apply(this instanceof n&&t?this:t,e.concat(Array.prototype.slice.call(arguments)))};return n.prototype=this.prototype,s.prototype=new n,s});var app=app||{};!function(){"use strict";function t(t){for(var e=t.toString(2),i=6-e.length,n="",s=0;i>s;s++)n+="0";return n+e}function e(e,i){var n=e.getElementsByClassName("dot");n=Array.prototype.slice.call(n,0).reverse();for(var s=t(i).split("").reverse().join(""),a=0;a<n.length;a++)a<s.length?n[a].classList.toggle("on","1"===s[a]):n[a].classList.remove("on")}function i(t,i,n){var s=t.getElementsByClassName("numeric")[0];s.innerHTML=i;var a=t.getElementsByClassName("bin-col");"months"===n?e(a[0],i):(e(a[1],i%10),e(a[0],Math.floor(i/10)))}var n=new Date(2015,2,17);app.Timer=function(){this.tick();var t=1e3;app.mobile&&(t=15e3),window.setInterval(this.tick,t)},app.Timer.prototype.tick=function(){var t=countdown(n),e=document.getElementsByClassName("timer-block");i(e[0],t.months,"months"),i(e[1],t.days),i(e[2],t.hours),i(e[3],t.minutes),app.mobile||i(e[4],t.seconds)}}();var anim=anim||{};anim.shapeData={T:{width:240,height:240,vertices:{A:[20,0],B:[100,0],C:[140,0],D:[240,0],E:[0,40],F:[100,40],G:[140,40],H:[240,40],I:[140,140],J:[100,240],K:[140,240],L:[100,140]},triangles:[["A","E","F",[["A","E",!1],["E","F",!1]]],["A","F","B",[["A","B",!0]]],["B","F","C",[["B","C",!0]]],["C","F","G",[]],["C","G","H",[["G","H",!1]]],["C","H","D",[["C","D",!0],["H","D",!1]]],["F","I","G",[["I","G",!1]]],["F","L","I",[["F","L",!1]]],["L","J","I",[["L","J",!1]]],["J","I","K",[["J","K",!1],["K","I",!1]]]]},V:{width:120,height:200,vertices:{A:[0,0],B:[40,0],C:[80,0],D:[120,0],E:[20,97],F:[60,150],G:[100,97],H:[40,240],I:[80,240]},triangles:[["A","E","B",[["A","B",!0],["A","E",!1]]],["B","E","F",[["B","F",!0]]],["E","H","F",[["E","H",!1]]],["F","H","I",[["H","I",!1]]],["F","I","G",[["I","G",!1]]],["C","F","G",[["C","F",!1]]],["C","G","D",[["G","D",!1],["C","D",!0]]]]}};var anim=anim||{};!function(){"use strict";anim.util={},anim.util.captureMouse=function(t){var e={x:0,y:0};return t.addEventListener("mousemove",function(i){var n,s;i.pageX||i.pageY?(n=i.pageX,s=i.pageY):(n=i.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,s=i.clientY+document.body.scrollTop+document.documentElement.scrollTop),n-=t.offsetLeft,s-=t.offsetTop,e.x=n,e.y=s},!1),e},anim.util.captureTouch=function(t){var e={x:null,y:null,isPressed:!1,event:null},i=document.body.scrollLeft,n=document.documentElement.scrollLeft,s=document.body.scrollTop,a=document.documentElement.scrollTop,o=t.offsetLeft,h=t.offsetTop;return t.addEventListener("touchstart",function(t){e.isPressed=!0,e.event=t},!1),t.addEventListener("touchend",function(t){e.isPressed=!1,e.x=null,e.y=null,e.event=t},!1),t.addEventListener("touchmove",function(t){var r,l,u=t.touches[0];u.pageX||u.pageY?(r=u.pageX,l=u.pageY):(r=u.clientX+i+n,l=u.clientY+s+a),r-=o,l-=h,e.x=r,e.y=l,e.event=t},!1),e},anim.util.forEachObj=function(t,e){for(var i in t)t.hasOwnProperty(i)&&e(i,t[i])}}();var anim=anim||{};anim.common={createLetters:function(t,e){"use strict";var i=30,n=[],s=0;e.split("").forEach(function(t){s+=anim.shapeData[t].width,s+=i}),s-=i;var a=t.width/2-s/2;return e.split("").forEach(function(e){var s=anim.shapeData[e],o=t.height/2-s.height/2;n.push(new anim.Letter(a,o,s)),a+=s.width+i}),n},energyLine:function(t,e,i,n){"use strict";var s,a,o,h,r=100;e.id!==i.id&&(s=i.x-e.x,a=i.y-e.y,o=Math.sqrt(s*s+a*a),r>o&&(h=(1-o/r)*(n||.2),t.strokeStyle="rgba(255, 255, 255, "+h+")",t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(i.x,i.y),t.stroke()))},handleMouse:function(t,e,i,n){"use strict";var s=app.util.extend({maxDist:anim.mobile?200:125,force:.1,alpha:.8},n||{}),a=t.x-e.x,o=t.y-e.y,h=Math.sqrt(a*a+o*o);if(h<s.maxDist){var r=Math.atan2(o,a),l=Math.cos(r)*s.force,u=Math.sin(r)*s.force;e.vx+=l,e.vy+=u;var c=(1-h/s.maxDist)*s.alpha;return i.save(),i.strokeStyle="rgba(0, 255, 0, "+c+")",i.lineWidth=2,i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(e.x,e.y),i.stroke(),i.restore(),!0}return!1}};var anim=anim||{};!function(){"use strict";function t(t,e,i,n,s,a){var o=n-e,h=i-t,r=Math.atan2(o,h),l=Math.sqrt(h*h+o*o);this.x1=0,this.y1=0,this.x2=l,this.y2=0,s?(this.x=t,this.y=e,this.rotation=r):(this.x=i,this.y=n,this.x2=l,this.rotation=r+Math.PI),this.lineWidth=10,this.callback=a}t.prototype.draw=function(t){t.save(),t.translate(this.x,this.y),t.rotate(this.rotation),t.scale(this.scaleX,this.scaleY),t.strokeStyle="#ff0",t.lineWidth=this.lineWidth,t.beginPath(),t.moveTo(this.x1,this.y1),t.lineTo(this.x2,this.y2),t.closePath(),t.stroke(),t.restore()},t.prototype.getBounds=function(){if(0===this.rotation){var t=Math.min(this.x1,this.x2),e=Math.min(this.y1,this.y2),i=Math.max(this.x1,this.x2),n=Math.max(this.y1,this.y2);return{x:this.x+t,y:this.y+e,width:i-t,height:n-e}}var s=Math.sin(this.rotation),a=Math.cos(this.rotation),o=a*this.x1+s*this.y1,h=a*this.x2+s*this.y2,r=a*this.y1+s*this.x1,l=a*this.y2+s*this.x2;return{x:this.x+Math.min(o,h),y:this.y+Math.min(r,l),width:Math.max(o,h)-Math.min(o,h),height:Math.max(r,l)-Math.min(r,l)}},anim.Line=t}();var anim=anim||{};!function(){"use strict";function t(t,e){this.cordinates=[t[e[0]],t[e[1]],t[e[2]]];var i=Math.floor(Math.random()*s.length);this.color=s[i],this.highlightAlpha=0,this.fading="null",this.delay=0}var e=.01,i=.005,n=.3,s=[{fill:"#313886",highlight:"rgba(151, 158, 236, "},{fill:"#1d226e",highlight:"rgba(80, 85, 161, "},{fill:"#0e145d",highlight:"rgba(65, 71, 144, "},{fill:"#2e347c",highlight:"rgba(97, 103, 175,"}];t.prototype.getCallback=function(){var t=this;return function(){t.highlightAlpha=Math.min(t.highlightAlpha+n,1),t.fading="in",t.updateHighlight()}},t.prototype.updateHighlight=function(){"in"===this.fading?this.highlightAlpha=Math.min(this.highlightAlpha+e,1):"out"===this.fading&&(this.highlightAlpha=Math.max(this.highlightAlpha-i,0)),0===this.highlightAlpha?this.fading="null":1===this.highlightAlpha&&(this.fading="out")},t.prototype.draw=function(t){if(this.delay>0)return void(this.delay-=15);var e=this.cordinates;t.save(),t.beginPath(),t.moveTo(e[0][0],e[0][1]),t.lineTo(e[1][0],e[1][1]),t.lineTo(e[2][0],e[2][1]),t.closePath(),t.fillStyle=this.color.fill,t.fill(),this.highlightAlpha>0&&(t.fillStyle=this.color.highlight+this.highlightAlpha+")",t.fill(),this.updateHighlight()),t.restore()},anim.Triangle=t}();var anim=anim||{};!function(){"use strict";function t(t,e,i){var n=this;this.vertices=i.vertices,this.edges=[],this.external=[],this.edgeList={},this.triangles=[],i.triangles.forEach(function(i){var s=i[0]+i[1],a=i[1]+i[0],o=i[1]+i[2],h=i[2]+i[1],r=i[0]+i[2],l=i[2]+i[0];s in n.edgeList||a in n.edgeList||(n.edges.push([n.vertices[i[0]],n.vertices[i[1]]]),n.edgeList[s]=!0),o in n.edgeList||h in n.edgeList||(n.edges.push([n.vertices[i[1]],n.vertices[i[2]]]),n.edgeList[o]=!0),r in n.edgeList||l in n.edgeList||(n.edges.push([n.vertices[i[0]],n.vertices[i[2]]]),n.edgeList[r]=!0);var u=new anim.Triangle(n.vertices,i);n.triangles.push(u),u.delay=600*Math.random()+200,i[3].forEach(function(i){var s=n.vertices[i[0]],a=n.vertices[i[1]];n.external.push(new anim.Line(s[0]+t,s[1]+e,a[0]+t,a[1]+e,i[2],u.getCallback()))})}),this.x=t,this.y=e}var e="rgba(80, 186, 248, 0.9)",i=2,n="rgba(80, 186, 248, 0.5)";t.prototype.draw=function(t){t.save(),t.translate(this.x,this.y),this.triangles.forEach(function(e){e.draw(t)}),t.fillStyle=e,anim.util.forEachObj(this.vertices,function(e,n){t.beginPath(),t.arc(n[0],n[1],i,0,2*Math.PI,!1),t.closePath(),t.fill()}),t.strokeStyle=n,this.edges.forEach(function(e){var i=e[0],n=e[1];t.beginPath(),t.moveTo(i[0],i[1]),t.lineTo(n[0],n[1]),t.stroke()}),t.restore()},anim.Letter=t}();var anim=anim||{};!function(){"use strict";function t(t,e){this.id=h++,i=t,this.bounds={left:0,right:t.width,top:0,bottom:t.height},this.radius=Math.random()*l+r,this.mass=this.radius*c,this.color=a,this.highlightColor=o,this.highlightAlpha=0,this.x=Math.random()*t.width,this.y=Math.random()*t.height,this.vx=Math.random()*u,this.vy=Math.random()*u,this.vx*=-1*Math.round(Math.random()),this.vy*=-1*Math.round(Math.random()),10*Math.random()>5&&(this.vx*=-1),10*Math.random()>5&&(this.vy*=-1),this.delay=e}function e(t,e,i,n,s){return{x:s?t*n+e*i:t*n-e*i,y:s?e*n-t*i:e*n+t*i}}var i,n="#4fe400",s="rgba(0, 255, 0, ",a="#1d215c",o="rgba(88, 93, 155,",h=1,r=7,l=3,u=.7,c=5;t.prototype.randomise=function(){this.x=Math.random()*i.width,this.y=Math.random()*i.height,this.x=Math.random()*i.width,this.y=Math.random()*i.height,this.vx=Math.random()*u,this.vy=Math.random()*u,this.vx*=-1*Math.round(Math.random()),this.vy*=-1*Math.round(Math.random())},t.prototype.tag=function(t){t?(this.tagged=!0,this.color=n,this.highlightColor=s):(this.tagged=!1,this.color=a,this.highlightColor=o)},t.prototype.isTagged=function(){return!!this.tagged},t.prototype.update=function(){this.x+=this.vx,this.y+=this.vy,this.x+this.radius>this.bounds.right?(this.x=this.bounds.right-this.radius,this.vx*=-1):this.x-this.radius<this.bounds.left&&(this.x=this.bounds.left+this.radius,this.vx*=-1),this.y+this.radius>this.bounds.bottom?(this.y=this.bounds.bottom-this.radius,this.vy*=-1):this.y-this.radius<this.bounds.top&&(this.y=this.bounds.top+this.radius,this.vy*=-1)},t.prototype.draw=function(t){return this.delay>0?void(this.delay-=15):(t.save(),t.translate(this.x,this.y),t.beginPath(),t.arc(0,0,this.radius,0,2*Math.PI,!1),t.closePath(),t.fillStyle=this.color,t.fill(),this.highlightAlpha>0&&(t.fillStyle=this.highlightColor+this.highlightAlpha+")",t.fill(),this.highlightAlpha=Math.max(this.highlightAlpha-.001,0)),void t.restore())},t.prototype.collide=function(t){var i=t.x-this.x,n=t.y-this.y,s=Math.sqrt(i*i+n*n);if(s&&s<t.radius+this.radius){var a=Math.atan2(n,i),o=Math.sin(a),h=Math.cos(a),r={x:0,y:0},l=e(i,n,o,h,!0),u=e(this.vx,this.vy,o,h,!0),c=e(t.vx,t.vy,o,h,!0),d=u.x-c.x;u.x=((this.mass-t.mass)*u.x+2*t.mass*c.x)/(this.mass+t.mass),c.x=d+u.x,r.x+=u.x,l.x+=c.x;var m=e(r.x,r.y,o,h,!1),f=e(l.x,l.y,o,h,!1);t.x=this.x+f.x,t.y=this.y+f.y,this.x=this.x+m.x,this.y=this.y+m.y;var g=e(u.x,u.y,o,h,!1),y=e(c.x,c.y,o,h,!1);this.vx=g.x,this.vy=g.y,t.vx=y.x,t.vy=y.y,this.highlightAlpha=Math.min(this.highlightAlpha+.4,1),t.highlightAlpha=Math.min(t.highlightAlpha+.4,1)}this.clamp(),t.clamp()},t.prototype.collideLine=function(t){var e=t.getBounds();if(this.x+this.radius>e.x&&this.x-this.radius<e.x+e.width&&this.y+this.radius>e.y&&this.y-this.radius<e.y+e.height){var i=Math.cos(t.rotation),n=Math.sin(t.rotation),s=this.x-t.x,a=this.y-t.y,o=i*a-n*s,h=i*this.vy-n*this.vx;if(o>-this.radius&&h>o){var r=i*s+n*a,l=i*this.vx+n*this.vy;return o=-this.radius,h*=-1,s=i*r-n*o,a=i*o+n*r,this.vx=i*l-n*h,this.vy=i*h+n*l,this.x=t.x+s,this.y=t.y+a,t.callback&&t.callback(this),!0}}return!1},t.prototype.clamp=function(){this.vx>u&&(this.vx=u),this.vy>u&&(this.vy=u)},anim.Atom=t}();var anim=anim||{};!function(){"use strict";function t(t,e){var i;for(r=t,l=e,u=[],d=[],f=w,i=0;g>i;i++)u.push(new anim.Atom(t,x+Math.random()*M));return c=anim.common.createLetters(t,y),c.forEach(function(t){Array.prototype.push.apply(d,t.external)}),document.body.classList.add("game-mode"),document.getElementsByClassName("js-reset")[0].addEventListener("click",function(t){t.preventDefault(),b="ready",anim.setMode("game")}),h(),a}function e(){if(f>0)return void(f-=15);var t;f>-500&&(t=f/-500*.2,f-=15),u.forEach(function(e){u.forEach(function(i){void 0!==t?anim.common.energyLine(l,e,i,t):anim.common.energyLine(l,e,i)})})}function i(){var t=anim.getPointer();if(!t)return 0;var e=t,i=5;if(!(e&&e.x>i&&e.x<r.width-i&&e.y>i&&e.y<r.height-i))return 0;if(f>0)return 0;var s=0;return u.forEach(function(e){var i=anim.common.handleMouse(t,e,l);!i||"playing"!==b&&"ready"!==b||(s+=1,e.tag(!0),"playing"!==b&&n())}),s}function n(){"ready"===b&&(b="playing")}function s(){b="paused",o()}function a(){var t;l.clearRect(0,0,r.width,r.height),"paused"!==b&&(e(),t=i(),u.forEach(function(t){u.forEach(function(e){t.collide(e)}),d.forEach(function(e){var i=t.collideLine(e);"playing"===b&&i&&t.isTagged()&&s()})})),u.forEach(function(t){"paused"!==b&&t.update(l),t.draw(l)}),c.forEach(function(t){t.draw(l)}),void 0===t||isNaN(t)||(v=Math.max(t,v)),p+=15,p>500&&(p=0,h())}function o(){document.body.classList.add("game-over")}function h(){void 0===m&&(m=document.getElementsByClassName("score")[0]);var t,e=0;for(t=1;v>=t;t++)e+=Math.pow(2,t);m.innerHTML=e}var r,l,u,c,d,m,f,g=30,y="TTVTT",p=0,v=0,x=1e3,M=1e3,w=2e3,b="ready";anim.game={main:t}}();var anim=anim||{},app=app||{};!function(){"use strict";function t(t,e){var u;for(o=[],r=[],a=f,n=t,s=e,anim.mobile&&(g=10,l="T"),u=0;g>u;u++)o.push(new anim.Atom(n,d+Math.random()*m));return h=anim.common.createLetters(n,l),h.forEach(function(t){Array.prototype.push.apply(r,t.external)}),i}function e(t){var e=20,i=!1,s=anim.getPointer();s&&s.x>e&&s.x<n.width-e&&s.y>e&&s.y<n.height-e&&(i=!0);var h,l=!0;a>0?(a-=15,l=!1):a>-500&&(h=a/-500,a-=15);var d=0;o.forEach(function(e){if(i&&l&&s){var n;n=h?anim.common.handleMouse(s,e,t,{alpha:.8*h}):anim.common.handleMouse(s,e,t),n&&(d+=1)}o.forEach(function(i){var n;h&&(n=.2*h),l&&anim.common.energyLine(t,e,i,n),e.collide(i)})}),c&&0===d&&(u+=15,u>=2e3&&c&&(document.body.classList.remove("logo-interacted"),c=!1)),d>3&&!c&&(document.body.classList.add("logo-interacted"),c=!0,u=0),o.forEach(function(e){r.forEach(function(t){e.collideLine(t)}),e.update(t),e.draw(t)})}function i(){s.clearRect(0,0,n.width,n.height),e(s),h.forEach(function(t){t.draw(s)})}var n,s,a,o,h,r,l="VTTTV",u=0,c=!1,d=1e3,m=1e3,f=2e3,g=30;anim.logo={main:t}}();var anim=anim||{};!function(){"use strict";function t(){if(Modernizr.canvas||window.alert("blah"),window.innerWidth<767?anim.mobile=!0:anim.desktop=!0,Modernizr.touch&&(anim.touch=!0),!anim.mobile){var t=document.getElementsByClassName("landing")[0];t.style.height=window.innerHeight+"px"}"complete"===document.readyState||"loaded"===document.readyState?e():document.addEventListener("DOMContentLoaded",e),anim.desktop&&document.getElementsByClassName("js-start-game")[0].addEventListener("click",function(t){t.preventDefault(),n("game")})}function e(){if(anim.touch){a=anim.util.captureTouch(l);var t;l.addEventListener("touchstart",function(){t=new Date}),l.addEventListener("touchend",function(){o=!1,t=void 0}),l.addEventListener("touchmove",function(e){t&&new Date-t>300&&(o=!0,e.preventDefault())})}else a=anim.util.captureMouse(l);var e=window.innerHeight;anim.desktop&&(e-=250),l.setAttribute("width",window.innerWidth),l.setAttribute("height",e),c=!0,void 0!==h&&n(h),window.requestAnimationFrame(i)}function i(){window.requestAnimationFrame(i),c&&void 0!==h&&r()}function n(t){"game"===t?r=anim.game.main(l,u):"logo"===t&&(r=anim.logo.main(l,u)),h=t}function s(){return anim.touch&&!o?void 0:a}var a,o,h,r,l=document.getElementById("canvas"),u=l.getContext("2d"),c=!1;anim.init=t,anim.setMode=n,anim.getPointer=s}();