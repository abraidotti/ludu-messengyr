import React from 'react';
import ReactDom from 'react-dom';

class MenuMessage extends React.Component{
  render(){
    return(
      <li>
        <img className="avatar"/>
      </li>

      <div className="profile-container">
        <p className="name">John Doe</p>

        <date>Two hours ago</date>

        <p className="message">
          Here's a message!
        </p>
      </div>
    )
  }
}

export default MenuMessage;
