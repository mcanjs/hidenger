"use strict";

var Hidenger = (function () {
    return {
        trigger: function (el) {
            if (el.charAt(0) === '#') {
                var button = document.querySelector(el);
                var buttonAttribute = button.getAttribute('data-relevant-input');
                var input = document.getElementById(buttonAttribute);
                button.addEventListener('click', function (e) { Hidenger.onClickHandler(e, input) });
            } else {
                var button = document.querySelectorAll(el);
                window.el = el;
                for (var i = 0; i < button.length; i += 1) {
                    var buttonAttribute = button[i].getAttribute('data-relevant-input');
                    var input = document.getElementById(buttonAttribute);
                    button[i].addEventListener('click', function (e) { Hidenger.onClickHandler(e, input) });
                }
            }
        },
        onClickHandler: function (event, input) {
            var getInputType = input.getAttribute('type');
            if (getInputType === 'password') {
                input.setAttribute('type', 'text');
                event.currentTarget.innerText = 'Hide Password';
            } else {
                input.setAttribute('type', 'password');
                event.currentTarget.innerText = 'Show Password';
            }
        }
    }
})();

module.exports = Hidenger;
