const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="src/scss/main.css">
    <div class="overlay-container">
        <message-box></message-box>
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
        const backdrop = this.shadowRoot.querySelector('.overlay-container');
        backdrop.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    };

    connectedCallback() {
        this.overlayBackdropClose();
    }
}

window.customElements.define('overlay-window', Overlay);