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
`;class CustomButton extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(template.content.cloneNode(!0))}static get observedAttributes(){return["content"]}attributeChangedCallback(e,t,o){this.shadowRoot.querySelector("button").textContent=this.getAttribute("content")}}export default CustomButton;const template=document.createElement("template");template.innerHTML=`
    <link rel="stylesheet" href="src/css/main.css">
    <div class="loading-screen-overlay">
        <div class="spinner center">
            <div class="spinner-blade"></div>
        </div>
    </div>
`;class LoadingScreen extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(template.content.cloneNode(!0))}generateSpinners(){const t=this.shadowRoot.querySelector(".spinner");for(let e=0;e<12;e++)t.innerHTML+='<div class="spinner-blade"></div>'}connectedCallback(){this.generateSpinners()}}export default LoadingScreen;import{resetCountsHandler,incrementHandler}from"./helpers/message-helper.js";import{overlayCloseHandler}from"./helpers/overlay-helper.js";const template=document.createElement("template");template.innerHTML=`
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
        <loading-screen></loading-screen>
        <user-table></user-table>
    </div>
`;class Message extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(template.content.cloneNode(!0)),this.counts=0}closePopup(){const e=this.shadowRoot.querySelector(".close-burger");e.addEventListener("click",overlayCloseHandler)}makeButtonVisible(){const e=this.shadowRoot.querySelector("custom-button");5<this.counts&&e.removeAttribute("class")}outputClicks(){this.counts=+localStorage.getItem("counter");const e=this.shadowRoot.querySelector("output");e.prepend(this.counts)}resetCounts(){this.shadowRoot.querySelector("custom-button").addEventListener("click",()=>{resetCountsHandler(),overlayCloseHandler()})}connectedCallback(){incrementHandler(),this.outputClicks(),this.makeButtonVisible(),this.closePopup(),this.resetCounts()}}export default Message;import{overlayCloseHandler}from"./helpers/overlay-helper.js";const template=document.createElement("template");template.innerHTML=`
    <link rel="stylesheet" href="src/css/main.css">
    <section class="overlay-container">
        <message-box></message-box>
        <div class="overlay-container__backdrop"></div>
    </section>

`;class Overlay extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(template.content.cloneNode(!0))}overlayBackdropClose(){document.querySelector("overlay-window");const e=this.shadowRoot.querySelector(".overlay-container__backdrop");e.addEventListener("click",overlayCloseHandler)}connectedCallback(){this.overlayBackdropClose()}}export default Overlay;const template=document.createElement("template");template.innerHTML=`
    <link rel="stylesheet" href="src/css/main.css">
    <div class="user-data-table__container">
    <table>
        <thead>
            <tr>
                <th rowspan="2">First & Last Name</th>
                <th rowspan="2">Email</th>
                <th colspan="3">Address</th>
                <th rowspan="2">Mobile Phone</th>
                <th rowspan="2">Company Name</th>
            </tr>
            <tr>
                <th>City</th>
                <th>Street</th>
                <th>Suite</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
    </div>
`;class UserDataTable extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(template.content.cloneNode(!0)),this.userArray=[]}async loadUsers(){const e=this.shadowRoot.querySelector("tbody"),t=(e.innerHTML="",await fetch("https://jsonplaceholder.typicode.com/users"));for(const n of await t.json()){const a=document.createElement("tr");var o=`
                <tr>
                    <td>${n.name}</td>
                    <td>${n.email}</td>
                    <td>${n.address.city}</td>
                    <td>${n.address.street}</td>
                    <td>${n.address.suite}</td>
                    <td>${n.phone}</td>
                    <td>${n.company.name}</td>
                </tr>
            `;a.innerHTML=o,e.appendChild(a)}const s=document.querySelector("overlay-window").shadowRoot.querySelector("message-box").shadowRoot.querySelector("loading-screen").shadowRoot.querySelector(".loading-screen-overlay");s.classList.add("loader-not-visible")}connectedCallback(){this.loadUsers()}}export default UserDataTable;import ContentLoader from"./ContentLoader.js";import CustomButton from"./CustomButton.js";import LoadingScreen from"./LoadingScreen.js";import Message from"./Message.js";import Overlay from"./Overlay.js";import UserDataTable from"./UserDataTable.js";window.customElements.define("content-loader",ContentLoader),window.customElements.define("custom-button",CustomButton),window.customElements.define("loading-screen",LoadingScreen),window.customElements.define("message-box",Message),window.customElements.define("overlay-window",Overlay),window.customElements.define("user-table",UserDataTable);const incrementHandler=()=>{var e=localStorage.getItem("counter");localStorage.setItem("counter",++e)},resetCountsHandler=()=>{localStorage.setItem("counter",0)},overlayInitHandler=()=>{var e=document.createElement("overlay-window");document.body.prepend(e)},overlayCloseHandler=()=>{var e=document.querySelector("overlay-window");document.body.removeChild(e)};export{incrementHandler,resetCountsHandler,overlayInitHandler,overlayCloseHandler};