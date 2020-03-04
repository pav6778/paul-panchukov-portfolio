import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div className="container home-page section">
                <div className="row">
                    <div className="card col z-depth-2 s12 center-align">
                        <div className="col l6 m10 push-m1 s12">
                            <div className="info-text">
                                <h3><b>HELLO</b></h3>
                                <h4><b>My name is Paul Panchukov</b></h4>
                                <h4><b>&amp;</b></h4>
                                <h4><b>I am a Full Stack Web Developer</b></h4>
                            </div>
                        </div>
                        <div className="col l6 m10  push-m1 s12">
                            <div className=""></div>
                            <img className="responsive-img z-depth-1" alt="" src="./images/photo.jpg" />
                        </div>
                        <div className="center-align col s12">
                            <div className="section">
                                <div className="divider"></div>
                                <div className="skills">
                                    Familiarity with technologies:
                        <p>ReactJS, JavaScript, HTML5/CSS3, NodeJS, ExpressJS, EJS, Bootstrap 4, Materialize, MySQL, MongoDB, Sequelize, Mongoose, Handlebars, FireBase, VScode, KonvaJS, PassportJS</p>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="icons"><a href="https://github.com/pav6778"><img width="35" alt="" src="./images/cat.png" /><div>GitHub</div></a></div>
                            <div className="icons"><a href="https://instagram.com/pav_67"><img width="35" alt="" src="./images/insta.png" /><div>Instagram</div></a></div>
                            <div className="icons"><a href="https://linkedin.com/in/pav67"><img width="35" alt="" src="./images/linked.png" /><div>LinkedIn</div></a></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home