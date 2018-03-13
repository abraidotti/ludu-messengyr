import React from 'react';
import ReactDom from 'react-dom';

import MenuMessage from './menu-message';

class MenuContainer extends React.Component{
  render(){
    return(
      <div className="menu">
        <div className="header">
          <h3>Messages</h3>
          <button className="compose"></button>
        </div>

        <ul>
          <MenuMessage />
        </ul>

      </div>
    )
  }
}

export default MenuContainer;
