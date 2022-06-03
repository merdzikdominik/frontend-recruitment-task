// const template = document.createElement('template');
// template.innerHTML = `
//     <div class="user-card">
//         <h3></h3>
//         <div>
//             <img />
//         </div>
//     </div>
// `;

// class UserCard extends HTMLElement {
//     constructor() {
//         super();
//         this.attachShadow({mode: 'open'});
//         this.shadowRoot.appendChild(template.content.cloneNode(true));

//         this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
//         this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');

//         // this.shadow = this.attachShadow()
//     };
// }

// window.customElements.define('user-card', UserCard);