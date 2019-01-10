class Hidenger {
    constructor() {
        this.button = document.getElementsByClassName('hidenger-show-hide');

        Array.from(this.button).forEach(element => {
            element.addEventListener('click', () => {
                this.showHideInput(element);
            });
        });

    }

    showHideInput(action) {

        const inputElem = action.previousElementSibling;

        if (inputElem.getAttribute('type') === 'password') {
            inputElem.removeAttribute('type');
            inputElem.setAttribute('type', 'text');
        } else {
            inputElem.removeAttribute('type');
            inputElem.setAttribute('type', 'password');
        }

    }

}
