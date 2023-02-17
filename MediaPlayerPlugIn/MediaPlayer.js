import { html,LitElement,css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';


// define the component
export class MediaPlayerPlugIn extends LitElement {
  
  static properties = {
    video_src: {type: String}, 
    Platform: {type: String}   
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
      controlName: 'Media Player',
      fallbackDisableSubmit: false,
      groupName: 'Media Player',
      version: '1.2',
      properties: {
        video_src: {
          type: 'string',
          title: 'Media Source',
          description: 'Youtube embeded link'
        },       
        Platform: {
          title: 'Platform',
          type: 'string',
        	enum: ['YouTube', 'Vimeo'],
          showAsRadio: false,
          verticalLayout: true,
          defaultValue: 'YouTube',
          description: 'Choose your Platform (YouTube is supported'
        }         
        
      }
    };
  }


  checkAdress() {
     if(this.video_src) {
      console.log(this.video_src);       
      
      return html`
                
                <div class="plyr__video-embed" id="player">
            <iframe
                src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
                allowfullscreen
                allowtransparency
                allow="autoplay"
            ></iframe>

      `;
    
    }
    else {      
      return html`
        <p>Bitte geben Sie ein Video ein / Please enter a source  </p>  
      `;   
    }
  }     
  

  
  constructor() {
    super();
    this.checkAdress();

    
    //this.calc = this.calculateValues();   
    
  }


  headerTemplate() {
    return html` <link rel="stylesheet" href="https://cdn.plyr.io/3.7.3/plyr.css" integrity="sha384-SJV3P4M7HAy7F55UGLwv5aE/9KoVGctCtTJkEl7eMnHsZyDwTaWHXKZ6IGB9JRIn" crossorigin="anonymous">
                  <script src="https://cdn.plyr.io/3.7.3/plyr.js" integrity="sha384-33jVIndfkOX7H37cczCzt4rl3sbeUuYt1Qav5aQhKxf74q6Hz4dot4A/yYXZxF36" crossorigin="anonymous"></script>            
   
                
                `;
  }

  footerTemplate() {
    return html` </div> `;
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
const elementName = 'mediaplayer-plugin';
customElements.define(elementName, MediaPlayerPlugIn);