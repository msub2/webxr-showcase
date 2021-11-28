/**
 * Site Navigation
 */
class M2Header extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'header');

        // Logo
        const logo = document.createElement('h1');
        logo.setAttribute('id', 'title');
        logo.innerText = 'm₂';

        // Home link
        const home = document.createElement('a');
        home.setAttribute('href', '/');
        home.innerText = 'Home';

        // Silk Brush link
        const silkbrush = document.createElement('a');
        silkbrush.setAttribute('href', '/silk-brush/');
        silkbrush.innerText = 'Silk Brush';

        // Silk Brush files link
        const files = document.createElement('p');
        files.innerHTML = '(<a href="/silk-brush/files/">Files</a>)';

        // WebXR Showcase
        const showcase = document.createElement('a');
        showcase.setAttribute('href', "/webxr-showcase/");
        showcase.innerText = 'WebXR Showcase';

        // Styling
        const style = document.createElement('style');
        style.textContent = `
            a {
                color: #dd4a4a;
                text-decoration: none;
                font-size: 1.5em;
            }
        
            h1 {
                font-size: 4em;
            }

            .header > a {
                margin: 1em;
            }

            p {
                display: inline;
                margin-left: -.5em;
                margin-right: 1em;
                font-size: 1.5em;
            }

            p > a {
                font-size: 1em;
            }
        `;

        shadowRoot.append(style);
        wrapper.appendChild(logo);
        wrapper.appendChild(home);
        wrapper.appendChild(silkbrush);
        wrapper.appendChild(files);
        wrapper.appendChild(showcase);
        wrapper.appendChild(document.createElement('hr'));

        shadowRoot.append(wrapper);
    }
}
customElements.define('m2-header', M2Header);


const PROJECT_NAMES = [
    "0 - Getting Started",
    "1 - Hello World",
    "2 - First Steps",
    "3 - On The Move",
    "4 - Hands On"
];

class PreviousProject extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const link = document.createElement('a');

        let urlElements = window.location.href.split('/');
        let currentProject = Number(urlElements[urlElements.length - 3]);

        // Styling
        const style = document.createElement('style');
        style.textContent = `
            a, a:visited, a:hover, a:active {
                color: #dd4a4a;
            }
        `;

        if (currentProject > 0) {
            urlElements[urlElements.length - 3] = String(currentProject - 1);
            link.href = urlElements.join('/');
            link.innerText = PROJECT_NAMES[currentProject - 1];
            shadowRoot.append(style);
            shadowRoot.appendChild(link);
        }
        else {
            console.log('current project is 0 or less');
            return;
        }
    }
}
customElements.define('previous-project', PreviousProject);

class NextProject extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const link = document.createElement('a');

        let urlElements = window.location.href.split('/');
        let currentProject = Number(urlElements[urlElements.length - 3]);

        // Styling
        const style = document.createElement('style');
        style.textContent = `
            a, a:visited, a:hover, a:active {
                color: #dd4a4a;
            }
        `;

        if (currentProject >= 0) { // Determine cutoff later
            urlElements[urlElements.length - 3] = String(currentProject + 1);
            link.href = urlElements.join('/');
            link.innerText = PROJECT_NAMES[currentProject + 1];
            shadowRoot.append(style);
            shadowRoot.appendChild(link);
        }
        else {
            return;
        }
    }
}
customElements.define('next-project', NextProject);

/**
 * Latest script tags
 */
LATEST_SCRIPT_TAGS = {
    'aframe': '<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>',
    'babylon': '<script src="https://cdn.babylonjs.com/babylon.js"></script>',
    'janusweb': '<script src="https://web.janusvr.com/janusweb.js"></script>'
};

class LatestScriptTag extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('pre');
        const tag = document.createElement('code');
        wrapper.appendChild(tag);
        
        shadowRoot.append(wrapper);
    }
    connectedCallback() {
        let tag = this.shadowRoot.children[0];
        tag.innerText = LATEST_SCRIPT_TAGS[this.getAttribute('for')];
    }
}
customElements.define('latest-script-tag', LatestScriptTag);