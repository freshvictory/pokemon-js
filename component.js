export class Component extends HTMLElement {
  constructor(templateId) {
    super();

    this.attachShadow({ mode: 'open' });

    const template = document.getElementById(templateId);

    if (template) {
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}


export function define(options) {
  options.attributes = options.attributes || [];
  options.data = options.data || {};
  for (const attribute of options.attributes) {
    options.data[attribute] = options.data[attribute] || undefined;
  }
  return buildElementClass(options);
}


function buildElementClass(options) {
  const ComponentClass =
  class extends Component {
    static get observedAttributes() {
      return options.attributes;
    }


    constructor() {
      super(options.id);

      this.data = new Proxy({}, {
        get: (obj, prop) => {
          return typeof obj[prop] === 'boolean'
            ? this.hasAttribute(prop)
            : this.getAttribute(prop) || obj[prop];
        },
        set: (obj, prop, value) => {
          obj[prop] = value;
          if (options.attributes.indexOf(prop) !== -1) {
            if (typeof obj[prop] === 'boolean') {
              this[obj[prop] ? 'setAttribute' : 'removeAttribute'](
                prop, ''
              );
            } else {
              if (value) {
                this.setAttribute(prop, value);
              } else {
                this.removeAttribute(prop);
              }
            }
          }

          return true;
        }
      });

      for (const data in options.data) {
        const option = options.data[data];
        if (this.hasAttribute(data)) {
          continue;
        }
        if (typeof option === 'object') {
          if ('default' in option) {
            this.data[data] = option.default;
          } else {
            this.data[data] = this.getAttribute(data) || undefined;
          }
        } else {
          this.data[data] = undefined;
        }
      }


      this.refs = { host: this };      
      if (this.shadowRoot) {
        for (const ref of this.shadowRoot.querySelectorAll('[id]')) {
          this.refs[ref.id] = ref;
        }
      }
    }

    
    connectedCallback() {
      if (options.connected) {
        options.connected(this.data, this.refs);
      } else if (options.render) {
        options.render(this.data, this.refs);
      }
    }


    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue === newValue) { return; }
      if (options.changed) {
        options.changed(this.data, this.refs, name, oldValue, newValue);
      } else if (options.render) {
        options.render(this.data, this.refs);
      }
    }
  };

  return ComponentClass;
}

