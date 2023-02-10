import { html,LitElement,css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
//import 'https://cdn.jsdelivr.net/npm/lit-google-map@1.0.1/dist/lit-google-map.bundle.min.js';


// define the component
export class MapsPlugin extends LitElement {
  
  static properties = {
    who: {type: String},
    calc: {type: Number}
  };


   static styles = css`

      #map {
        height: 400px; /* The height is 400 pixels */
        width: 100%; /* The width is the width of the web page */
      }
    
      `;

  
  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'MapsStuffTesting',
      fallbackDisableSubmit: false,
      version: '1.2',
      properties: {
        who: {
          type: 'string',
          title: 'Who',
          description: 'API Key'
        }
      }
    };
  }

  calculateValues() {

        return 5+5;
    
    }
 
  
  
  
  constructor() {
    super();
    this.who = 'NO API KEY TEST';   
    this.calc = this.calculateValues();
    
  }

  render() {    //AIzaSyAfj3UBiLzTktElylX3hpgBmddYuH26bhI    

  
    return html`
             
      
    `; 
    

  }
  
}

// registering the web component
const elementName = 'maps-plugin';
customElements.define(elementName, MapsPlugin);