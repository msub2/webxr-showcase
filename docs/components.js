import 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.3.1/build/highlight.min.js';

/**
 * Site Header
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

/**
 * Latest script tags
 */
const LATEST_SCRIPT_TAGS = {
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
 * Content Switching
 */
const CONTENT_NAMES = [
  'A-Frame',
  'babylon.js',
  'Godot',
  'JanusWeb',
  'LÖVR',
  'nunuStudio',
  'p5.xr',
  'Playcanvas',
  'Sumerian',
  'three.js',
  'Unity',
  'Verge3D',
  'Wonderland Engine'
];

var CURRENT_CONTENT = null;

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

    const title = document.createElement('b');
    title.innerText = 'Content';

    const wrapper = document.createElement('ul');
    CONTENT_NAMES.forEach(content => {
      wrapper.appendChild(new ContentButton(content));
    });

    // Styling
    const style = document.createElement('style');
    style.textContent = `
            b {
              font-size: 1.5em;
              color: #dd4a4a;
            }
            
            ul {
              list-style-type: none;
              margin: 0;
              padding: 0;
              width: 200px;
              background-color: #222;
            }

            li {
              border-left: 4px solid #dd4a4a;
            }

            li:hover {
              border-left: 6px solid #ffffff;
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
    shadowRoot.append(title);
    shadowRoot.append(wrapper);
  }
}
customElements.define('content-switch', ContentSwitch);

/**
 * Project Navigation
 */
 const PROJECT_NAMES = [
  '0 - Getting Started',
  '1 - Hello World',
  '2 - First Steps',
  '3 - On The Move',
  '4 - Hands On',
];

 class ProjectButton {
  constructor(project) {
    const wrapper = document.createElement('li');
    const button = document.createElement('a');
    button.innerText = project;
    button.onclick = () => {
      window.open(`../${PROJECT_NAMES.indexOf(project)}`, '_self');
    }    
    wrapper.appendChild(button);
    return wrapper;
  }
}

class ProjectNav extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    const title = document.createElement('b');
    title.innerText = 'Project';

    const wrapper = document.createElement('ul');
    PROJECT_NAMES.forEach(project => {
      wrapper.appendChild(new ProjectButton(project));
    })

    // Styling
    const style = document.createElement('style');
    style.textContent = `
            b {
              font-size: 1.5em;
              color: #dd4a4a;
            }

            ul {
              list-style-type: none;
              margin: 0;
              padding: 0;
              width: 200px;
              background-color: #222;
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
    shadowRoot.append(title);
    shadowRoot.append(wrapper);
  }
}
customElements.define('project-nav', ProjectNav);

class SourceCode extends HTMLElement {
  constructor() {
    super();

    const link = this.getAttribute('link');

    const shadowRoot = this.attachShadow({ mode: 'open' });

    const details = document.createElement('details');
    details.open = true;
    const summary = document.createElement('summary');
    summary.innerText = link.split('/').pop();
    details.appendChild(summary);
    const pre = document.createElement('pre');
    const code = document.createElement('code');
    details.appendChild(pre);
    pre.appendChild(code);

    fetch(link).then(res => {
      res.text().then(text => {
        code.innerText = text;
      });
    });

    const style = document.createElement('style');
    style.innerText = `
        pre {
          background-color: #222;
          border: 1px solid #e3e3e3;
          box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
        }

        code {
          margin: 2px;
        }
    `;
    
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(details);
  }
}
customElements.define('source-code', SourceCode);
