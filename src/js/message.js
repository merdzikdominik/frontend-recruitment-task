import { resetCountsHandler, increment } from './helpers/message-helper.js';
import { overlayCloseHandler } from './helpers/overlay-helper.js';

const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="src/scss/main.css">
    <div class="message-box__container">
        <div class="message-box__content">
            <div class="message-box__text">
                <h1>Alert!</h1>
                <p>You have clicked 
                    <span>
                        <output></output> times
                    </span> 
                    to related button.
                </p>
            </div>
            <button class="btn-reset">Reset counter</button>
        </div>
        <div class="close-burger"></div>
    </div>
`;
class Message extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.counts = 0;
    };

    closePopup() {
        const closeBurger = this.shadowRoot.querySelector('.close-burger');
        closeBurger.addEventListener('click', overlayCloseHandler)
    }

    makeButtonVisible() {
        const resetCountsBtn = this.shadowRoot.querySelector('button');
        resetCountsBtn.classList.toggle('resetButtonVisible', this.counts > 5);
    };

    outputClicks() {
        this.counts = +localStorage.getItem('counter');
        const outputElement = this.shadowRoot.querySelector('output');
        outputElement.prepend(this.counts);
    };

    resetCounts() {
        this.shadowRoot.querySelector('button').addEventListener('click', () => {
            resetCountsHandler();
            overlayCloseHandler();
        });
    }

    connectedCallback() {
        increment();
        this.outputClicks();
        this.makeButtonVisible();
        this.closePopup();
        this.resetCounts();
    };

};

window.customElements.define('message-box', Message);