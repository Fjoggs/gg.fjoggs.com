import React, { Component } from 'react';

export default class Guides extends Component {

  componentDidMount () {
    // let markdown = require('markdown').markdown;
    // console.log(markdown.toHTML(guide));
  }

  render() {
    return (
      <div>
        <ul className="nav-sidebar">
          <li>Kenya Cup</li>
          <li>Console Use</li>
        </ul>
        <div className="guides-container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet felis pharetra interdum placerat. Nam est enim, dignissim at orci a, consequat euismod turpis. Nunc quis nunc nisi. Etiam lobortis, enim et iaculis consequat, nunc mauris iaculis odio, nec consequat tortor ex et turpis. Nullam tellus neque, tincidunt ac egestas et, accumsan ut enim. Suspendisse sagittis lobortis tristique. Vivamus vestibulum, sem at elementum aliquam, erat sapien mollis mauris, eu porta neque urna id diam. Integer gravida venenatis sem, vel accumsan mi eleifend vitae. Praesent nec lectus orci. Praesent lobortis tortor in fermentum tempor. Cras iaculis pellentesque aliquam. Suspendisse auctor lacus eu odio congue, ut rhoncus ligula venenatis. Donec bibendum ex sapien, eu molestie augue elementum sed. Suspendisse suscipit tellus sit amet convallis pharetra. Curabitur mattis turpis arcu, ut fringilla velit fermentum vel. Nullam gravida condimentum tortor eu congue.
          Cras tincidunt a elit non interdum. Nulla vitae elit vitae dolor aliquet maximus vitae eu nisi. Phasellus sit amet diam ut enim pharetra ultricies. Praesent imperdiet quis nulla eu venenatis. Praesent laoreet mattis lorem, vel viverra nibh efficitur a. Sed eget urna nec nisl tempus pellentesque ut quis ex. Cras tristique erat id quam accumsan ultricies. Nulla pellentesque pretium dapibus. Duis ipsum risus, bibendum eget mi vitae, congue maximus dui. Sed ligula lectus, sagittis vel metus vel, ultricies scelerisque eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean non pulvinar elit, at elementum mauris.
          Curabitur ultrices finibus congue. Pellentesque cursus sed erat sit amet tincidunt. Nullam ornare facilisis tristique. Duis consectetur nulla sit amet purus consectetur euismod. Donec rutrum mauris vel blandit ultrices. Vestibulum accumsan ligula vitae tempus luctus. Duis quis tincidunt ligula, non dapibus elit. Fusce vel risus vitae magna consectetur mattis quis et metus. Curabitur pharetra, nisi vel imperdiet tempor, eros lorem hendrerit lacus, quis ullamcorper nunc libero eget velit. Phasellus suscipit, nunc in posuere luctus, tellus ex blandit quam, ac semper ligula odio a libero. Aliquam at nulla blandit, faucibus ligula vel, pretium erat.
        </div>
      </div>
    );
  }
}
