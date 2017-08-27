import React from 'react';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <header className="text-center">
          <h1>Markdown Previewer</h1>
          <div className="m-2">
            <p>Type your markdown text on the left, and see it converted with formatting applied on the right!</p>
          </div>
        </header>
        <div className="container-fluid h-100">

          <div className="row">
            <div className="col-6">
              <textarea className="form-control w-100" name="" id="" rows="20" placeholder="Enter markdown text here">
                Todo: add default text
                Todo: set the font of the text-area to courier
              </textarea>
            </div>
            <div className="col-6">
              Todo
            </div>
          </div>
        </div>
      </div>
    )
  }
}