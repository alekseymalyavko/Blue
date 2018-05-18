export let pieMenuGeneralComponent = (function () {

    let template = `
    <style>
    html {
	height: 100%
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .tabContent {
        display: none;
    }
    .tabContent.active{
        display: block;
    }
    </style>
    
    <div id="menu" class="tabContent">
        <pie-drag-and-drop></pie-drag-and-drop>
        <pie-general-info></pie-general-info>
        <pie-items></pie-items>
    </div>
    `;

    class MenuGeneralClass extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'open'}).innerHTML = template;
            this.tabContent = this.shadowRoot.getElementById('menu');
        }

        static get observedAttributes() {
            return ['tabstate'];
        }

        attributeChangedCallback(name, oldValue, newValue) {
            if (name === 'tabstate') {
                if (newValue === 'activeTab') {
                    this.tabContent.classList.add('active');
                }
                else {
                    this.tabContent.classList.remove('active');
                }
            }
        }
    }

    customElements.define('pie-menu-general', MenuGeneralClass);
}());