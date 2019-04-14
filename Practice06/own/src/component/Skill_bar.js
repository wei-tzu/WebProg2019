import React from "react";

export default ({ topic,description }) => {
    return (
        <div class="colorlib-feature animate-box" data-animate-effect="fadeInLeft">
            <div class="colorlib-icon">
                <i class="flaticon-worker"></i>
            </div>
            <div class="colorlib-text">
                <h3>{topic}</h3>
                <p>{description}</p>
            </div>                                            
        </div>
    );
};
