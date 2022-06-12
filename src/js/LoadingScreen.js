const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="src/css/main.css">
    <div class="loading-screen-overlay">
        <div class="spinner center">
            <div class="spinner-blade"></div>
        </div>
    </div>
`;

class LoadingScreen extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    generateSpinners() {
        const spinnerCenter = this.shadowRoot.querySelector('.spinner');
        const blade = '<div class="spinner-blade"></div>';
        
        for (let i = 0; i < 12; i++) {
            spinnerCenter.innerHTML += blade; 
        }
    }

    connectedCallback() {
        this.generateSpinners();
    }
}

export default LoadingScreen;