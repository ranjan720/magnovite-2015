var anim = anim || {};
var app = app || {};

/**
 * Depends on
 * {anim.Letter}
 * {anim.Atom}
 */
(function() {
    'use strict';

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var mouse = anim.util.captureMouse(canvas);
    var touch, touching, touchStart;

    var text = 'VTTTV';

    // timing delays
    var energyDelay = 2000;
    var atomMinDelay = 1000;
    var atomVariableDelay = 1000;

    // the particles moving around
    var atoms = [];
    var nAtoms = 30;
    var energyMinDist = 100;

    // mouse effect
    var mouseMaxDist = 150;
    var mouseForce = 0.05;

    // the letters
    var letters = [];

    // array of {Line}s of all external facing edges
    var externalLetterEdges = [];

    /**
     * Must be called to init the animation library
     */
    function init() {
        if (!Modernizr.canvas) {
            window.alert('blah');
        }

        if (window.innerWidth < 767) {
            anim.mobile = true;
        }

        if (Modernizr.touch) {
            anim.touch = true;
        }

        if (!anim.mobile) {
            var landing = document.getElementsByClassName('landing')[0];
            landing.style.height = window.innerHeight + 'px';
        }

        if (document.readyState === "complete" || document.readyState === "loaded") {
            app.main();
        } else {
            document.addEventListener('DOMContentLoaded', main);
        }
    }

    /**
     * Layout letters, all letter should be of height 240
     */
    function createLetters(text) {
        var letterSpacing = 30;

        var letters = [];

        // calculate width needed
        var totalWidth = 0;
        text.split('').forEach(function(c) {
            totalWidth += anim.shapeData[c].width;
            totalWidth += letterSpacing;
        });
        totalWidth -= letterSpacing;

        var letterX = (canvas.width / 2) - (totalWidth / 2);
        var letterY = (canvas.height / 2) - (240 / 2);
        text.split('').forEach(function(c) {
            var shape = anim.shapeData[c];

            letters.push(new anim.Letter(letterX, letterY, shape));

            letterX += shape.width + letterSpacing;
        });

        return letters;
    }

    /**
     * Essentially the entry point for the app
     * Called after DOM load
     */
    function main() {
        var i;

        var height = window.innerHeight - 250;

        if (anim.mobile) {
            // make logo fullscreen
            height += 250;
            nAtoms = 10;
            text = 'T';
            mouseMaxDist = 200;
        }

        if (anim.touch) {
            touch = anim.util.captureTouch(canvas);
            var touchstart;

            canvas.addEventListener('touchstart', function() {
                touchstart = new Date();
            });

            canvas.addEventListener('touchend', function() {
                touching = false;
                touchstart = undefined;
            });

            canvas.addEventListener('touchmove', function(e) {
                if (touchstart && (new Date() - touchstart) > 300) {
                    touching = true;
                    e.preventDefault();
                }
            });
        }

        canvas.setAttribute('width', window.innerWidth);
        canvas.setAttribute('height', height);

        // init atoms
        for (i = 0; i < nAtoms; i++) {
            atoms.push(new anim.Atom(canvas, atomMinDelay + Math.random() * atomVariableDelay));
        }

        // init Letters
        letters = createLetters(text);
        letters.forEach(function(letter) {
            Array.prototype.push.apply(externalLetterEdges, letter.external);
        });

        draw();
    }

    /**
     * Draws a line between two atoms based on the distance
     * {args atomA} : Object of class {Atom}
     * {args atomB} : Object of class {Atom}
     */
    function energyLine(atomA, atomB, baseAlpha) {
        var dx, dy, dist, alpha;

        if (atomA.id === atomB.id) {
            return;
        }

        dx = atomB.x - atomA.x;
        dy = atomB.y - atomA.y;
        dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < energyMinDist) {
            alpha = (1 - dist / energyMinDist) * (baseAlpha || 0.2);
            context.strokeStyle = 'rgba(255, 255, 255, ' + alpha + ')';
            context.beginPath();
            context.moveTo(atomA.x, atomA.y);
            context.lineTo(atomB.x, atomB.y);
            context.stroke();
        }
    }

    /**
     * Returns an object with x, y or undefiend
     * If undefined there is no touch
     *
     * this handles touches internally
     */
    function getMouseCordinates() {
        if (touch) {
            if (touching) {
                return touch;
            } else {
                return undefined;
            }
        } else {
            return mouse;
        }
    }

    /**
     * Make the mouse interact with the atoms
     */
    function handleMouse(atom, context, baseAlpha) {
        var m;
        if (!(m = getMouseCordinates())) {
            return;
        }

        var dx = m.x - atom.x;
        var dy = m.y - atom.y;
        var dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseMaxDist) {
            var angle = Math.atan2(dy, dx);
            var ax = Math.cos(angle) * mouseForce;
            var ay = Math.sin(angle) * mouseForce;

            atom.vx += ax;
            atom.vy += ay;

            // mouse energy line
            var alpha = (1 - dist / mouseMaxDist) * (baseAlpha || 0.8);
            context.save();

            context.strokeStyle = 'rgba(0, 255, 0, ' + alpha + ')';
            context.lineWidth = 2;
            context.beginPath();
            context.moveTo(m.x, m.y);
            context.lineTo(atom.x, atom.y);
            context.stroke();

            context.restore();
        }
    }

    function drawAtoms(context) {
        var buffer = 20;
        var isMouseGravityOn = false;

        var m = getMouseCordinates();
        if (m && m.x > 20 && m.x < canvas.width - buffer &&
            m.y > 20 && m.y < canvas.height - buffer) {
            isMouseGravityOn = true;
        }

        var drawEnergy = true;
        var energyAlpha;

        if (energyDelay > 0) {
            energyDelay -= 15;
            drawEnergy = false;

        } else if (energyDelay > -500) {
            energyAlpha = energyDelay / -500;
            energyDelay -= 15;
        }

        // draw energy lines
        atoms.forEach(function(atom) {
            var alpha;
            if (energyAlpha) {
                alpha = energyAlpha * 0.8;
            }

            if (isMouseGravityOn && drawEnergy) {
                handleMouse(atom, context, alpha);
            }

            atoms.forEach(function(atomB) {
                var alpha;
                if (energyAlpha) {
                    alpha = energyAlpha * 0.2;
                }

                if(drawEnergy) {
                    energyLine(atom, atomB, alpha);
                }

                // collide atoms with themselves
                atom.collide(atomB);
            });
        });

        // draw atoms
        atoms.forEach(function(atom) {
            // collide atom with letters
            externalLetterEdges.forEach(function(line) {
                atom.collideLine(line);
            });

            atom.update(context);
        });
    }

    /**
     * The main draw loop
     */
    function draw() {
        window.requestAnimationFrame(draw);
        context.clearRect(0, 0, canvas.width, canvas.height);

        drawAtoms(context);

        // draw letters
        letters.forEach(function(letter) {
            letter.draw(context);
        });

        // draw external edges seperately : // TODO: DEBUG
        // externalLetterEdges.forEach(function(line) {
        //     line.draw(context);
        // });
    }

    // set external interface
    anim.init = init;
    anim.canvas = canvas;
    anim.context = context;

})();