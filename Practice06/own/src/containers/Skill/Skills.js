import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Article extends Component {
    render() {
      const ArTitle = ["My first day to school","good songs make me cry"]
      const lists = ArTitle.map((i, index) => (
        <h3><li  key={index}>
           <NavLink style={{color: "#000000"}} to={"/article/" + index}>{i}</NavLink>
        </li></h3>));
      return (
        <div>
        <span class="heading-meta">Skills</span>
        <div class="row row-bottom-padded-md">
						<div class="col-md-6">
							<div class="row">
								<div class="col-md-12">
									<div class="colorlib-feature animate-box" data-animate-effect="fadeInLeft">
										<div class="colorlib-icon">
											<i class="flaticon-worker"></i>
										</div>
										<div class="colorlib-text">
											<h3>General Conctructing</h3>
											<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
										</div>
								</div>
              </div>
             </div>
          </div>
        </div>
      </div>
          );
    }
  }