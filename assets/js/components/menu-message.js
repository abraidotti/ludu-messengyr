import React from 'react';
import ReactDom from 'react-dom';

class MenuMessage extends React.Component{
  render(){
    let room = this.props.room;
    let counterpart = room.counterpart;

    let lastMessage = room.messages.slice(-1)[0];
    let sentAt = lastMessage.sentAt;

    return(
      <li>
        <img className="avatar"/>

        <div className="profile-container">
          <p className="name">
            {counterpart.username}
          </p>

          <date>
            {sentAt}
          </date>

          <p className="message">
            {lastMessage.text}
          </p>
        </div>
      </li>
    )
  }
}

export default MenuMessage;
