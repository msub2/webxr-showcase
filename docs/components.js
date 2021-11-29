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
    showcase.setAttribute('href', '/webxr-showcase/');
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
  '0 - Getting Started',
  '1 - Hello World',
  '2 - First Steps',
  '3 - On The Move',
  '4 - Hands On',
];

class PreviousProject extends HTMLElement {
  constructor() {
    super();
    
    const shadowRoot = this.attachShadow({ mode: 'open' });
  
    this.link = document.createElement('a');
  
    // Styling
    const style = document.createElement('style');
    style.textContent = `
            a, a:visited, a:hover, a:active {
                color: #dd4a4a;
            }
        `;
  
    shadowRoot.append(style);
    shadowRoot.appendChild(this.link);
  }
  connectedCallback() {
    const list = this.getAttribute('list') != null;
    const offset = list ? 2 : 3;

    let urlElements = window.location.href.split('/');
    let currentProject = Number(urlElements[urlElements.length - offset]);

    if (currentProject > 0) {
      urlElements[urlElements.length - offset] = String(currentProject - 1);
      this.link.href = urlElements.join('/');
      this.link.innerText = PROJECT_NAMES[currentProject - 1];
      
    } else {
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

    this.link = document.createElement('a');

    // Styling
    const style = document.createElement('style');
    style.textContent = `
            a, a:visited, a:hover, a:active {
                color: #dd4a4a;
            }
        `;
    
    shadowRoot.append(style);
    shadowRoot.appendChild(this.link);
  }
  connectedCallback() {
    const list = this.getAttribute('list') != null;
    const offset = list ? 2 : 3;
    
    let urlElements = window.location.href.split('/');
    let currentProject = Number(urlElements[urlElements.length - offset]);

    if (currentProject >= 0) {
      // Determine cutoff later
      urlElements[urlElements.length - offset] = String(currentProject + 1);
      this.link.href = urlElements.join('/');
      this.link.innerText = PROJECT_NAMES[currentProject + 1];
      
    } else {
      return;
    }
  }
}
customElements.define('next-project', NextProject);

/**
 * Latest script tags
 */
LATEST_SCRIPT_TAGS = {
  aframe:
    '<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>',
  babylon: '<script src="https://cdn.babylonjs.com/babylon.js"></script>',
  janusweb: '<script src="https://web.janusvr.com/janusweb.js"></script>',
  p5xr: '<script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js"></script>\n<script src="https://cdn.jsdelivr.net/npm/p5.xr@0.4.0/dist/p5xr.min.js"></script>',
  threejs: `<script type="module">\nimport * as THREE from 'https://cdn.skypack.dev/three@0.135.0';\n</script>`
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

/**
 * Content Loading
 */
CURRENT_CONTENT = null;

class ContentButton {
  constructor(content) {
    const wrapper = document.createElement('li');
    const button = document.createElement('a');
    button.innerText = content;
    button.onclick = () => {
      if (CURRENT_CONTENT == content) return;
      CURRENT_CONTENT = content;
      const template = document.getElementById(content).content.cloneNode(true);
      const contentDiv = document.getElementById('content');
      contentDiv.innerHTML = '';
      contentDiv.appendChild(template);
    }
    wrapper.appendChild(button);
    return wrapper;
  }
}

class ContentSwitch extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('ul');
    wrapper.appendChild(new ContentButton('A-Frame'));
    wrapper.appendChild(new ContentButton('babylon.js'));
    wrapper.appendChild(new ContentButton('Godot'));
    wrapper.appendChild(new ContentButton('JanusWeb'));
    wrapper.appendChild(new ContentButton('LÖVR'));
    wrapper.appendChild(new ContentButton('nunuStudio'));
    wrapper.appendChild(new ContentButton('p5.xr'));
    wrapper.appendChild(new ContentButton('Playcanvas'));
    wrapper.appendChild(new ContentButton('Sumerian'));
    wrapper.appendChild(new ContentButton('three.js'));
    wrapper.appendChild(new ContentButton('Unity'));
    wrapper.appendChild(new ContentButton('Verge3D'));
    wrapper.appendChild(new ContentButton('Wonderland Engine'));

    // Styling
    const style = document.createElement('style');
    style.textContent = `
            ul {
              list-style-type: none;
              margin: 0;
              padding: 0;
              width: 200px;
              background-color: #222;
              float: left;
              position: absolute;
              
            }

            li {
              border-right: 4px solid #dd4a4a;
            }

            li:hover {
              border-right: 6px solid #ffffff;
            }
            
            li a {
              display: block;
              color: #0d0d0d;
              padding: 8px 16px;
              text-decoration: none;
              color: #dd4a4a
            }
            
            /* Change the link color on hover */
            li a:hover {
              background-color: #555;
              color: white;
              cursor: pointer;
            }
        `;

    shadowRoot.append(style);
    shadowRoot.append(wrapper);
  }
}
customElements.define('content-switch', ContentSwitch);
