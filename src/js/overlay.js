import { overlayCloseHandler } from './helpers/overlay-helper.js';

const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="src/css/main.css">
    <section class="overlay-container">
        <message-box></message-box>
        <div class="overlay-container__backdrop"></div>
    </section>

`;
class Overlay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    };

    // clicking on the grey background will trigger the helper function responsible for removing the whole overlay component from DOM
    overlayBackdropClose() {
        const overlay = document.querySelector('overlay-window');
        const backdrop = this.shadowRoot.querySelector('.overlay-container__backdrop');
        backdrop.addEventListener('click', overlayCloseHandler);
    };

    connectedCallback() {
        this.overlayBackdropClose();
    };
}

export default Overlay;