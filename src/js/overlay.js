import { overlayCloseHandler } from './helpers/overlay-helper.js';

const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="src/scss/main.css">
    <div class="overlay-container">
        <message-box></message-box>
        <div class="overlay-container__backdrop"></div>
    </div>

`;
class Overlay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    };

    overlayBackdropClose() {
        const overlay = document.querySelector('overlay-window');
        const backdrop = this.shadowRoot.querySelector('.overlay-container__backdrop');
        backdrop.addEventListener('click', overlayCloseHandler);
    };

    connectedCallback() {
        this.overlayBackdropClose();
    }
}

window.customElements.define('overlay-window', Overlay);