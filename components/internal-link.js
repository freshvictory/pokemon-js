import { CustomElement } from './custom-element.js';
import { Navigation } from '../router.js';

export class InternalLink extends CustomElement {
  connectedCallback() {
    this.link = this.shadow.add(
      'a',
      {
        href: this.get('href'),
        title: this.get('title'),
        style: `width: 100%; height: 100%; display: inline-block`
      }
    );
    this.link.addEventListener(
      'click',
      (e) => {
        /*
        * If we're trying to open the link in a new tab,
        * don't preventDefault(). Otherwise, we're clicking
        * normally and should handle it ourselves.
        *
        * https://stackoverflow.com/a/20025627
        */ 
        if (
          !(
            (
              e.type == 'click' 
              || e.type == 'mousedown'
              || e.type == 'mouseup'
            )
            &&
            (
              e.which > 1
              || e.button > 1
              || e.ctrlKey
              || e.shiftKey
              || e.metaKey
            )
          )
        ) {
          e.preventDefault();
          Navigation.navigate(this.link.getAttribute('href'));
        }
      }
    );

    this.link.add(
      'slot'
    );
  }
}

customElements.define('internal-link', InternalLink);
