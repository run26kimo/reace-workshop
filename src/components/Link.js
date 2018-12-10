import React, { Component } from 'react';

class Link extends Component {
  static defaultProps = {
    text: "Google",
    href: "https:/google.com/"
  }

  state = {
    counter: 0
  }

  render(){
    console.log(this.props.text + this.state.counter)
    return (
      <a className="App-link"
         href={this.props.href}
         target="_blank"
         rel="noopener noreferrer"
         onMouseEnter={() => {
          this.setState({
            counter: ++this.state.counter
          })
         }}
         >
         {this.props.text}
         &nbsp;
         {this.state.counter}
         </a>
    )
  }
}

export default Link