// assets/js/app.js

import React from 'react';
import ReactDOM from 'react-dom';

import ChatContainer from "./components/chat-container.js";
import MenuContainer from "./componennts/menu-container.js";

import DATA from "./fake-data";

class App extends React.Component {
  render() {
    const ROOMS = DATA.rooms;
    const MESSAGES = DATA.rooms[0].messages;

    return (
      <div>
        <MenuContainer
          rooms={ROOMS}
        />
        <ChatContainer
          messages={MESSAGES}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
