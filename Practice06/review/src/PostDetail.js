import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { NavLink, Switch, Route } from 'react-router-dom'
import img1 from "./1.jpg";
import img2 from "./3.jpg";
import img3 from "./2.jpg";
import img4 from "./4.jpg";

let posts = [
  {author:'Author 1', title:"Title 1", time:"2019/1/1", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis ornare libero. Cras orci erat, cursus eget ex quis, pretium porta erat. Ut quis nunc molestie, placerat nibh id, venenatis elit. Curabitur in odio nulla. Aenean luctus augue tortor, in finibus orci gravida vitae. Vivamus ac aliquam est. Nunc eu nisi mi. Curabitur interdum dui eleifend tempus molestie.", pic:img1},
  {author:'Author 2', title:"Title 2", time:"2019/1/2", body:"Donec varius est fermentum interdum euismod. Cras consectetur urna fermentum nulla suscipit ultricies. Donec lacinia lacinia nisi quis viverra. Mauris dictum, libero at bibendum malesuada, mi arcu sollicitudin tellus, id commodo nulla massa sed felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce et risus a ex vulputate condimentum eu bibendum tellus. Quisque ac tempor velit, nec suscipit erat. Donec faucibus enim in rutrum consequat. Sed condimentum molestie eros sit amet maximus. Suspendisse blandit eros quis ante tempus tristique. Aliquam non iaculis nunc.", pic:img2},
  {author:'Author 3', title:"Title 3", time:"2019/1/3", body:"Suspendisse vitae fringilla sem. Suspendisse facilisis in massa at pharetra. Morbi et mattis nisl. Morbi a odio ornare, facilisis lacus non, dignissim nisl. Donec et mattis ligula. Aliquam blandit imperdiet mauris. Quisque placerat vitae eros eu dapibus. Integer luctus eu ante dictum tristique. In sed orci eros. Etiam aliquam, tellus ac pellentesque iaculis, quam nibh semper lacus, id molestie felis lacus ac lorem. Aenean posuere sem non ex lacinia ultricies. Nullam et varius libero. Aliquam erat volutpat. Vivamus varius turpis ac viverra molestie.", pic:img3},
  {author:'Author 4', title:"Title 4", time:"2019/1/4", body:"Sed vel lacus non turpis vulputate ultrices non vitae erat. Fusce blandit vestibulum justo, vel sollicitudin velit iaculis sed. In congue, eros a pulvinar tincidunt, nulla ipsum condimentum erat, non bibendum tellus enim a nibh. Nullam pellentesque pretium ligula sit amet tempor. In augue turpis, tempus vitae est vestibulum, tristique lobortis lorem. Nam mi libero, viverra sed dolor aliquam, ornare dignissim eros. Nullam neque felis, pellentesque sit amet placerat quis, tempus eu lectus. Quisque eu varius ante. Sed blandit pellentesque sem. In et tellus sed mauris tincidunt euismod. Nullam non nibh sit amet nulla semper volutpat. Donec fringilla pretium enim, quis feugiat tellus interdum et. Proin auctor tincidunt dolor in blandit.", pic:img4},
]

class PostDetail extends Component {
    render() {
      let id = this.props.match.params.id;
      let stuff = posts[id-1];
      console.log(id);
        return (
            <div className="post">
            <h2 className="post-header">
              {stuff.title}
            </h2>
            <p> Time: {stuff.time}</p>
            <p> By: {stuff.author} </p>
            <hr />
            <div className="postContent">
            
            <p><img className="bodyimg" src={stuff.pic} alt="img" align="left"></img>{stuff.body} </p>
            </div>
          
          </div>
        );
    }
}

export default PostDetail;