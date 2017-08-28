import React from 'react';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      displayText: ''
    }
  }

  updateText(text) {
    this.setState({
      displayText: text
    });
  }

  render() {
    const {displayText} = this.state;
    return (
      <div>
        <header className="text-center">
          <h1 className="my-4">Markdown Previewer</h1>
          <div className="mx-2 mb-5">
            <p>Type your markdown text on the left, and see it converted with formatting applied on the right!</p>
          </div>
        </header>
        <div className="container-fluid h-100">
          <div className="row">

            <div className="col-6">
              <textarea onChange={e => this.updateText(e.target.value)} className="form-control w-100 input-pane" name="" id="" rows="20" placeholder="Enter markdown text here">
              </textarea>
            </div>

            <div className="col-6 output-pane">
              {displayText}
            </div>

          </div>
        </div>
      </div>
    )
  }
}