import React, { Component } from 'react';

export default class Downloads extends Component {
  render() {
    return (
      <div>
        <h1>Download</h1>
        <h3>TODO: Write a proper download page</h3>
        <a href="/downloads/latest">CPMA 0.00 + 0.00</a>
        <p>Installation instructions:</p>
        <p>Extract the contents of CPMA-XXX-YYY.zip to your Quake 3 Arena folder</p>
        <ul>
          <li>If you bought Quake 3 Arena through Steam, this is most likely C:\Program Files (x86)\Steam\steamapps\Quake III Arena</li>
          <li>If you bought the original retail Quake 3 Arena, this is most likely C:\Program Files (x86)\Quake III Arena</li>
          <li>If you don't own Quake 3, you can buy it on Steam</li>
        </ul>
        <p>Start the game with CPMA-Client.exe</p>
      </div>
    );
  }
}
