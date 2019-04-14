import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Skill_bar from "../../component/Skill_bar";

export default class Article extends Component {
    render() {
      const skill_topic = ["Python","Html"]
      const skill_des = ["no database is so unconvenient"]
      const skill_lists = skill_topic.map((i, index) => (
        <div class="colorlib-feature animate-box" data-animate-effect="fadeInLeft">
          <Skill_bar key={index} topic={skill_topic[index]} description ={skill_des[0]}/>
        </div>
        ));
      return (
        <div>
        <span class="heading-meta">Skills</span>
        <h2 class="colorlib-heading"></h2>
        <div class="row row-bottom-padded-md">
						<div class="col-md-6">
							<div class="row">
								<div class="col-md-12">
                  {skill_lists}
              </div>
             </div>
          </div>
        </div>
      </div>
          );
    }
  }