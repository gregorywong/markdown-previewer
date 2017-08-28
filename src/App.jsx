import React from 'react';
import marked from 'marked';

const startingText = 'Heading\n=======\n\nSub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Greg Wong](http://www.gregwong.me)*';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      inputText: startingText,
      displayText: marked(startingText)
    }
  }

  updateText(text) {
    this.setState({
      inputText: text,
      displayText: marked(text)
    });
  }

  render() {
    const {inputText, displayText} = this.state;
    return (
      <div>
        <header className="text-center">
          <h1 className="py-4">Markdown Previewer</h1>
          <div className="mx-2 pb-2 mb-4">
            <p>Type your markdown text on the left, and see it converted with formatting applied on the right!</p>
          </div>
        </header>
        <div className="container-fluid h-100">
          <div className="row">

            <div className="col-6">
              <textarea onChange={e => this.updateText(e.target.value)} className="form-control w-100 input-pane" name="" id="" rows="25" placeholder="Enter markdown text here" value={inputText}>
              </textarea>
            </div>

            <div className="col-6 output-pane" dangerouslySetInnerHTML={{__html: displayText}} >
            </div>

          </div>
        </div>
      </div>
    )
  }
}