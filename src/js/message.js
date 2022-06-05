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
            <button class="btn">Reset counter</button>
        </div>
        <div class="close"></div>
    </div>
`;
//<button>Reset counts</button>
class Message extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
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