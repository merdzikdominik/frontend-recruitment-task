import{overlayInitHandler}from"./helpers/overlay-helper.js";const template=document.createElement("template");template.innerHTML=`
    <link rel="stylesheet" href="src/css/main.css">
    <section class="main-module">
        <div class="main-module-image__container">
            <img class="displayed-picture" alt="picture representing the beach and the sea on the right side"/>
        </div>
        <div class="main-module-content__container">
            <div class="content">
                <h1></h1>
                <p></p>
                <custom-button content="Button"></custom-button>
            </div>
        </div>
    </section>
`;class ContentLoader extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(template.content.cloneNode(!0))}static get observedAttributes(){return["picture","content","title"]}loadOverlay(){this.shadowRoot.querySelector("custom-button").addEventListener("click",overlayInitHandler)}attributeChangedCallback(e,t,o){this.shadowRoot.querySelector("h1").textContent=this.getAttribute("title"),this.shadowRoot.querySelector(".displayed-picture").src=this.getAttribute("picture"),this.shadowRoot.querySelector("p").textContent=this.getAttribute("content")}connectedCallback(){this.loadOverlay()}}export default ContentLoader;const template=document.createElement("template");template.innerHTML=`
    <link rel="stylesheet" href="src/css/main.css">
    <button class="btn btn-colors"></button>
`;class CustomButton extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(template.content.cloneNode(!0))}static get observedAttributes(){return["content"]}attributeChangedCallback(e,t,o){this.shadowRoot.querySelector("button").textContent=this.getAttribute("content")}}export default CustomButton;import ContentLoader from"./ContentLoader.js";import CustomButton from"./CustomButton.js";import Message from"./Message.js";import Overlay from"./Overlay.js";window.customElements.define("content-loader",ContentLoader),window.customElements.define("custom-button",CustomButton),window.customElements.define("message-box",Message),window.customElements.define("overlay-window",Overlay);import{resetCountsHandler,incrementHandler}from"./helpers/message-helper.js";import{overlayCloseHandler}from"./helpers/overlay-helper.js";const template=document.createElement("template");template.innerHTML=`
    <link rel="stylesheet" href="src/css/main.css">
    <div class="message-box__container">
        <div class="message-box__content">
            <div class="message-box__text">
                <h2>Alert!</h2>
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
    </div>
`;class Message extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(template.content.cloneNode(!0)),this.counts=0}closePopup(){const e=this.shadowRoot.querySelector(".close-burger");e.addEventListener("click",overlayCloseHandler)}makeButtonVisible(){const e=this.shadowRoot.querySelector("custom-button");5<this.counts&&e.removeAttribute("class")}outputClicks(){this.counts=+localStorage.getItem("counter");const e=this.shadowRoot.querySelector("output");e.prepend(this.counts)}resetCounts(){this.shadowRoot.querySelector("custom-button").addEventListener("click",()=>{resetCountsHandler(),overlayCloseHandler()})}connectedCallback(){incrementHandler(),this.outputClicks(),this.makeButtonVisible(),this.closePopup(),this.resetCounts()}}export default Message;import{overlayCloseHandler}from"./helpers/overlay-helper.js";const template=document.createElement("template");template.innerHTML=`
    <link rel="stylesheet" href="src/css/main.css">
    <div class="overlay-container">
        <message-box></message-box>
        <div class="overlay-container__backdrop"></div>
    </div>

`;class Overlay extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(template.content.cloneNode(!0))}overlayBackdropClose(){document.querySelector("overlay-window");const e=this.shadowRoot.querySelector(".overlay-container__backdrop");e.addEventListener("click",overlayCloseHandler)}connectedCallback(){this.overlayBackdropClose()}}export default Overlay;const incrementHandler=()=>{var e=localStorage.getItem("counter");localStorage.setItem("counter",++e)},resetCountsHandler=()=>{localStorage.setItem("counter",0)},overlayInitHandler=()=>{var e=document.createElement("overlay-window");document.body.prepend(e)},overlayCloseHandler=()=>{var e=document.querySelector("overlay-window");document.body.removeChild(e)};export{incrementHandler,resetCountsHandler,overlayInitHandler,overlayCloseHandler};