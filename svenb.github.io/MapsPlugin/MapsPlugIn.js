import { html,LitElement,css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';


// define the component
export class MapsPlugin extends LitElement {
  
  static properties = {
    apiKey: {type: String}, 
    FormattedAdress: {type: String},
    long: {type: String}
    
  };

  static styles = css`

  .map-container {
      overflow:hidden;
      padding-bottom:56.25%;
      position:relative;
      height:0;
  }
  .map-container iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
  }

  `;
 

  
  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'Maps Canvas',
      fallbackDisableSubmit: false,
      groupName: 'Google Maps',
      version: '1.2',
      properties: {
        apiKey: {
          type: 'string',
          title: 'API Key',
          description: 'Please enter your Google API Key'
        },
        
        FormattedAdress: {
          type: 'string',
          title: 'Formatted Adress',
          description: 'Please add from Adress Control the formatted Adress'
        }
      }
    };
  }


  checkAdress() {
    if(this.FormattedAdress) {
      console.log(this.FormattedAdress);      
      return this.FormattedAdress;
    }
    else {      
      return "London";   
    }
  }     
  

  
  constructor() {
    super();
    this.checkAdress();

    
    //this.calc = this.calculateValues();   
    
  }


  

  render() {    //AIzaSyAfj3UBiLzTktElylX3hpgBmddYuH26bhI    

    
    return html`       
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        
        <div id="map-container-google-2" class="z-depth-1-half map-container" style="height: 500px">
        
        <iframe src="https://www.google.com/maps/embed/v1/place?key=${this.apiKey}&q=${this.checkAdress()}" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
      
      
    `;     

  }
  
}

// registering the web component
const elementName = 'maps-plugin';
customElements.define(elementName, MapsPlugin);