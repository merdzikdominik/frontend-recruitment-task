const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="src/css/main.css">
    <button class="btn btn-colors btn-animate"></button>
`;

class CustomButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ['content'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector('button').textContent = this.getAttribute('content');
    }

}

export default CustomButton;