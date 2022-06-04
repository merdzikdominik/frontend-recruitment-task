const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="src/scss/main.css">
    <script src="https://kit.fontawesome.com/50fbcf7093.js" crossorigin="anonymous" async></script>
    <div class="message-box__container">
        <div class="message-box__content">
            <h1>Alert!</h1>
            <p>You have clicked <span>X times</span> to related button.</p>
        </div>
        <i class="fa-solid fa-xmark"></i>
    </div>
`;

class Message extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

}

window.customElements.define('message-box', Message);