import React, { Component } from "react";
import Header from "./Header";

export default class Home extends Component {
  render() {
    return (
      <div>
        <section id="about-me">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div id="about-me-box">
                            <div class="row">
                                <div class="col-md-6 col-xs-12">
                                    <img class="max-width-xs" src="http://res.cloudinary.com/dc7s2okmx/image/upload/c_scale,h_400/v1515899540/photo-1479936343636-73cdc5aae0c3_zspukv.jpg" />
                                </div>
                                <div class="col-md-6 col-xs-12">
                                    <div class="text-center"><h1>About Me</h1></div>
                                    <p>Hi! My name is Karina and this is Check This Out.This personal review blog is filled with all my favoites. From movies to bucket list ideas to random suggestions for you. This is my personal taste so I can confirm that all the suggestions made are the best suggestions in the entire universe! Well... at least to me they are. Have fun looking around. I hope you find something worth enjoying. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}
