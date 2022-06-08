const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="src/scss/main.css">
    <div class="user-data-table__container">
    <table>
        <thead>
            <tr>
                <th rowspan="2">First & Last Name</th>
                <th rowspan="2">Email</th>
                <th colspan="4">Address</th>
                <th rowspan="2">Mobile Phone</th>
                <th rowspan="2">Company Name</th>
            </tr>
            <tr>
                <th>Street</th>
                <th>Suite</th>
                <th>City</th>
                <th>Zip Code</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
    </div>
`;

class UserDataTable extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async loadUsers() {
        // clearing the body table at the very beginning
        const tableBody = this.shadowRoot.querySelector('tbody');
        tableBody.innerHTML = '';

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        for (const user of users) {
            const rowNode = document.createElement('tr');
            const rowNodeTemplate = `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.address.street}</td>
                    <td>${user.address.suite}</td>
                    <td>${user.address.city}</td>
                    <td>${user.address.zipcode}</td>
                    <td>${user.phone}</td>
                    <td>${user.company.name}</td>
                </tr>
            `;
            rowNode.innerHTML = rowNodeTemplate;

            tableBody.appendChild(rowNode);
        }
    }

    connectedCallback() {
        this.loadUsers();
    }
}

window.customElements.define('user-table', UserDataTable);