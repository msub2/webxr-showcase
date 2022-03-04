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
    '<script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>',
  babylon: '<script src="https://cdn.babylonjs.com/babylon.js"></script>',
  janusweb: '<script src="https://web.janusvr.com/janusweb.js"></script>',
  p5xr: '<script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js"></script>\n<script src="https://cdn.jsdelivr.net/npm/p5.xr@0.4.0/dist/p5xr.min.js"></script>',
  threejs: `<script type="module">\nimport * as THREE from 'https://cdn.skypack.dev/three@0.137.0';\n</script>`
};

class LatestScriptTag extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('pre');
    const tag = document.createElement('code');
    wrapper.appendChild(tag);
    wrapper.style.backgroundColor = '#222';
    wrapper.style.border = '1px solid #e3e3e3';
    wrapper.style.boxShadow = 'inset 0 1px 1px rgba(0, 0, 0, .05)';
    wrapper.style.padding = '4px';

    shadowRoot.appendChild(wrapper);
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
  'p5.xr',
  'PlayCanvas',
  'React XR',
  'Rogue Engine',
  'three.js',
  'Unity',
  'Verge3D',
  'Wonderland Engine'
];

// Set up some variables to track active content loaded and set content from URL param
// This will allow direct linking to content so I can stop telling people to click the Unity button
const contentQuery = new URLSearchParams(window.location.search).get('content');
if (contentQuery != null && CONTENT_NAMES.includes(contentQuery)) {
  sessionStorage.setItem('content', contentQuery);
}
var CURRENT_CONTENT = sessionStorage.getItem('content') || CONTENT_NAMES[0];

class ContentButton {
  constructor(content) {
    const wrapper = document.createElement('li');
    const button = document.createElement('a');
    button.innerText = content;
    button.onclick = () => {
      if (CURRENT_CONTENT == content) return;
      CURRENT_CONTENT = content;
      sessionStorage.setItem('content', content);
      CONTENT_NAMES.forEach(content => {
        this.parent.contentMap[content].wrapper.className = '';
      });
      this.load(content);
    }
    wrapper.appendChild(button);
    this.button = button;
    this.wrapper = wrapper;
    return this;
  }
  load(content) {
    const template = document.getElementById(content).content.cloneNode(true);
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.appendChild(template);
    this.wrapper.className = 'active-content';
    this.updateURLParams(content);
  }
  updateURLParams(content) {
    const { protocol, host, pathname, search } = window.location;
    const params = new URLSearchParams(search);
    params.set('content', content);
    const newURL = `${protocol}//${host}${pathname}?${params.toString()}`;
    window.history.pushState({ path: newURL }, '', newURL);
  }
}

class ContentSwitch extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    const title = document.createElement('b');
    title.innerText = 'Content';

    const wrapper = document.createElement('ul');

    this.contentMap = {};
    CONTENT_NAMES.forEach(content => {
      const contentButton = new ContentButton(content);
      this.contentMap[content] = contentButton;
      contentButton['parent'] = this;
      if (content == CURRENT_CONTENT) contentButton.load(content);
      wrapper.appendChild(contentButton.wrapper);
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

        li:hover, .active-content {
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
      PROJECT_NAMES.forEach(project => {
        this.parent.projectMap[project].wrapper.className = '';
      });
      window.open(`../${PROJECT_NAMES.indexOf(project)}`, '_self');
    }    
    wrapper.appendChild(button);
    this.wrapper = wrapper;
    return this;
  }
  load() {
    this.wrapper.className = 'active-project';
  }
}

class ProjectNav extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    const title = document.createElement('b');
    title.innerText = 'Project';

    const wrapper = document.createElement('ul');

    this.projectMap = {};
    PROJECT_NAMES.forEach(project => {
      const projectButton = new ProjectButton(project);
      this.projectMap[project] = projectButton;
      projectButton['parent'] = this;
      const proj = PROJECT_NAMES[location.toString().split('/').slice(-2)[0]];
      if (project == proj) projectButton.load();
      wrapper.appendChild(projectButton.wrapper);
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
          border-right: 4px solid #dd4a4a;
        }

        li:hover, .active-project {
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

/**
 * Source Code Displaying
 */
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
          padding: 4px;
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
