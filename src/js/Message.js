import { resetCountsHandler, incrementHandler } from './helpers/message-helper.js';
import { overlayCloseHandler } from './helpers/overlay-helper.js';

const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="src/css/main.css">
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
            <custom-button class="btn-not-visible" content="Reset Counter"></custom-button>
        </div>
        <div class="close-burger"></div>
        <loading-screen></loading-screen>
        <user-table></user-table>
    </div>
`;
class Message extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.counts = 0;
    };

    // clicking on the hamburger icon background will trigger the helper function responsible for removing the whole overlay component from DOM
    closePopup() {
        const closeBurger = this.shadowRoot.querySelector('.close-burger');
        closeBurger.addEventListener('click', overlayCloseHandler)
    };

    // after reaching more than 5 clicks of the first button, the reset button within the popup will appear
    makeButtonVisible() {
        const resetCountsBtn = this.shadowRoot.querySelector('custom-button');
        if (this.counts > 5) resetCountsBtn.removeAttribute('class');
    };

    // method responsible for displaying the view of clicks
    outputClicks() {
        this.counts = +localStorage.getItem('counter');
        const outputElement = this.shadowRoot.querySelector('output');
        outputElement.prepend(this.counts);
    };

    // once the popup button will be pressed, the localstorage counter will be set to 0
    resetCounts() {
        this.shadowRoot.querySelector('custom-button').addEventListener('click', () => {
            resetCountsHandler();
            overlayCloseHandler();
        });
    };

    connectedCallback() {
        incrementHandler();
        this.outputClicks();
        this.makeButtonVisible();
        this.closePopup();
        this.resetCounts();
    };

}

export default Message;
