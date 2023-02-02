//AIzaSyAdmcWszWFYtK0esyOlcNzsbVTi2xpcHlw
import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
//import { litgooglemaps} from 'https://svenb.github.io/MapsPlugin/lib/lit-googlemaps.js';

// define the component
export class MapsPlugin extends LitElement {
  
  static properties = {
    who: {type: String},
  };
  
  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'Hello World',
      fallbackDisableSubmit: false,
      version: '1.2',
      properties: {
        who: {
          type: 'string',
          title: 'Who',
          description: 'Who to say hello to'
        }
      }
    };
  }
  
  constructor() {
    super();
    this.who = 'NO API KEY';
  }

  render() {
    //return html`<p><b>Hello ${this.who}</b><p/>`;
    return html `<script src="https://svenb.github.io/MapsPlugin/lib/lit-googlemaps.js"></script><lit-google-map api-key="${this.who}"></lit-google-map>`
  }
}

// registering the web component
const elementName = 'hello-world';
customElements.define(elementName, MapsPlugin);