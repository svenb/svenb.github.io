import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';


// define the component
export class WebcamPlugIn extends LitElement {
  
  static properties = {
    picturesrc: {type: String}
     
  };
  
  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'Webcam Plugin',
      fallbackDisableSubmit: false,
      groupName: 'Media Player',
      version: '1.2',
      properties: {
        picturesrc: {
          type: 'string',
          title: 'Picture Source / URL',
          description: 'Save the url/img'
        }        
      }
    };
  }


  checkAdress() {
             
      
      return html`
                
                <div id="camera" style="height:auto;width:auto; text-align:left;"></div>

                <!--FOR THE SNAPSHOT-->
                <input type="button" value="Take a Snap" id="btPic" onclick="takeSnapShot()" /> 
                <p id="snapShot"></p>

                <script>
                // CAMERA SETTINGS.
                Webcam.set({
                    width: 220,
                    height: 190,
                    image_format: 'jpeg',
                    jpeg_quality: 100
                });
                Webcam.attach('#camera');

                // SHOW THE SNAPSHOT.
                takeSnapShot = function () {
                    Webcam.snap(function (data_uri) {
                        document.getElementById('snapShot').innerHTML = 
                            '<img src="' + data_uri + '" width="70px" height="50px" />';
                    });
                }
            </script>
      `;  
    
  }     
  

  
  constructor() {
    super();
    this.checkAdress(); 
    
  }


  headerTemplate() {
    return html` 
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/webcamjs/1.0.25/webcam.js" integrity="sha384-pshkCKoXlfHSwsgXYXsPQ59N7JMM2Mm5iIo4VGj6SZiR60kxJ0IdyWtKVHYJ43pd" crossorigin="anonymous"></script>
              
                `;
  }

  footerTemplate() {
   
  }
  

  

  render() {        

    
    return html`       
        
           ${this.headerTemplate()}
           ${this.checkAdress()} 
           ${this.footerTemplate()}
          
      
    `;     

  }
  
}

// registering the web component
const elementName = 'webcamplugin-plugin';
customElements.define(elementName, WebcamPlugIn);