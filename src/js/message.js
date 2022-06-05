import { resetCountsHandler, increment } from './helpers/message-helper.js';

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
            <i class="fa-solid fa-xmark"></i>
            <button>Reset counts</button>
        </div>
    </div>
`;

class Message extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.styles = document.querySelector('script[src*="fontawesome"]');
        this.shadowRoot.appendChild(this.styles.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.counts = 0;
    };

    makeButtonVisible() {
        this.counts = +localStorage.getItem('counter');
        const resetCountsBtn = this.shadowRoot.querySelector('button');
        resetCountsBtn.classList.toggle('resetButtonVisible', this.counts > 5);
    };

    outputClicks() {
        this.counts = +localStorage.getItem('counter');
        const outputElement = this.shadowRoot.querySelector('output');
        outputElement.prepend(this.counts);
    };

    connectedCallback() {
        increment();
        this.outputClicks();
        this.makeButtonVisible();
        this.shadowRoot.querySelector('button').addEventListener('click', resetCountsHandler);
    };

};

window.customElements.define('message-box', Message);