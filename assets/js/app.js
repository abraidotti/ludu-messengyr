// assets/js/app.js

import React from 'react';
import ReactDOM from 'react-dom';

import ChatContainer from "./components/chat-container.js";
import MenuContainer from "./componennts/menu-container.js";

class App extends React.Component {
  render() {
    return (
      <div>
        Hello world!
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
