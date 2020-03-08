import { Navigation } from '../router.js';

export class CustomElement extends HTMLElement {
  constructor(cssPath) {
    super();

    this.init();

    this.shadow = this.attachShadow({ mode: 'open' });

    if (cssPath) {
      this.attachStyles(cssPath);
    }
  }


  init() {
    if (typeof HTMLElement.prototype.add !== 'undefined') {
      return;
    }

    const add = function(tag, attributes) {
      const el = document.createElement(tag);
    
      for (const [key, value] of Object.entries(attributes || {})) {
        el.setAttribute(key, value);
      }
    
      this.appendChild(el);
    
      return el;
    }
    
    HTMLElement.prototype.add = add;
    ShadowRoot.prototype.add = add;
  }


  attachStyles(cssPath) {
    this.shadow.add(
      'link',
      {
        rel: 'stylesheet',
        href: '/components/' + cssPath,
        crossorigin: 'anonymous'
      }
    );
  }

  get(attr) {
    return this.getAttribute(attr);
  }
}
