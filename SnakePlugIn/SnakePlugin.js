import { html,LitElement, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';


// define the component
export class SnakePlugin extends LitElement {
  
  static properties = {
    Score: {type: String}    
  };
  
  static styles = css`

  body {
    background: rgb(212, 211, 211);
    }      
    .grid {
        width: 200px;
        height: 200px;
        border: 1px solid red;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
    }
    .grid div {
        width: 20px;
        height: 20px;
        /*border:1px black solid;
    box-sizing:border-box*/
    }
    .snake {
        background: blue;
    }
    .apple {
        background: yellow;
        border-radius: 20px;
    }
    .popup {
        background: rgb(32, 31, 31);
        width: 100px;
        height: 100px;
        position: fixed;
        top: 100px;
        left: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

  `;


  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'Snake Game',
      fallbackDisableSubmit: false,
      groupName: 'Fun',
      version: '1.2',
      properties: {
        Score: {
          type: 'string',
          title: 'Score',
          description: 'Save your Snake Score to your Workflow'
        }
      }
    };
  }


  game() {
     
      
      return html`
            <div class="scoreDisplay"></div>
            <div class="grid"></div>
            <div class="button">
                <button class="top">top</button>
                <button class="bottom">bottom</button>
                <button class="left">left</button>
                <button class="right">right</button>
            </div>
            <div class="popup">
                <button class="playAgain">play Again</button>     
            </div>
           

      `;
    
    
  }     
  

  
  constructor() {
    super();
    this.checkAdress(); 
    
  }


  headerTemplate() {
    return html` 
    <script src="https://svenb.github.io/SnakePlugIn/snake.js" integrity="sha384-a3f1HVzUc/9G+6JdjLCYqIsUhCrGeYUofo3dAQKULrMEwhf41Dkr6yt7p1mAv/IK" crossorigin="anonymous"></script>            
    
    `;
  }

  footerTemplate() {
    return html`  `;
  }
  

  

  render() {        

    
    return html`       
        
           ${this.headerTemplate()}
           ${this.game()} 
           ${this.footerTemplate()}
          
      
    `;     

  }
  
}

// registering the web component
const elementName = 'snake-plugin';
customElements.define(elementName, SnakePlugin);