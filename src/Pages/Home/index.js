import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div className="container home-page section" >
                <div className="row">
                    <div className="card col z-depth-2 s12 center-align">
                        <div className="col l6 m10 push-m1 s12">
                            <div className="info-text">

                                <h4><b>Paul Panchukov</b></h4>
                                <h4><b>Web Developer</b></h4>
                            </div>
                        </div>
                        <div className="col l6 m10  push-m1 s12">
                            <div className=""></div>
                            <img className="responsive-img z-depth-1" alt="" src="./images/photo.jpg" />
                        </div>
                        <div className="center-align col s12" style={{backgroundColor: "white"}}>
                            <div className="section">
                                <div className="divider"></div>
                                <div className="skills">
                                   <b>Skills:</b> 

                        <div style={{border: "grey solid 1px", width: '100%', marginBottom: '1px'}}>
                            <div style={{height: '25px', width: '70%', backgroundColor: "#99D5FF", textAlign: "start", paddingLeft: 10}}>
<span >ReactJS</span>

                      
                      
                            </div>
                        </div>
                        <div style={{border: "grey solid 1px", width: '100%', marginBottom: '1px'}}>
                            <div style={{height: '25px', width: '85%', backgroundColor: "#99D5FF", textAlign: "start", paddingLeft: 10}}>
<span>JavaScript</span>
                            </div>
                        </div>
                        <div style={{border: "grey solid 1px", width: '100%', marginBottom: '1px'}}>
                            <div style={{height: '25px', width: '95%', backgroundColor: "#99D5FF", textAlign: "start", paddingLeft: 10}}>
<span>HTML5/CSS3</span>
                            </div>
                        </div>
                        <div style={{border: "grey solid 1px", width: '100%', marginBottom: '1px'}}>
                            <div style={{height: '25px', width: '66%', backgroundColor: "#99D5FF", textAlign: "start", paddingLeft: 10}}>
<span>NodeJS</span>
                            </div>
                        </div>
                        <div style={{border: "grey solid 1px", width: '100%', marginBottom: '1px'}}>
                            <div style={{height: '25px', width: '66%', backgroundColor: "#99D5FF", textAlign: "start", paddingLeft: 10}}>
<span>ExpressJS</span>
                            </div>
                        </div>
                        <div style={{border: "grey solid 1px", width: '100%', marginBottom: '1px'}}>
                            <div style={{height: '25px', width: '50%', backgroundColor: "#99D5FF", textAlign: "start", paddingLeft: 10}}>
<span>EJS</span>
                            </div>
                        </div>
                        <div style={{border: "grey solid 1px", width: '100%', marginBottom: '1px'}}>
                            <div style={{height: '25px', width: '80%', backgroundColor: "#99D5FF", textAlign: "start", paddingLeft: 10}}>
<span>Bootstrap 4</span>
                            </div>
                        </div>
                        <div style={{border: "grey solid 1px", width: '100%', marginBottom: '1px'}}>
                            <div style={{height: '25px', width: '80%', backgroundColor: "#99D5FF", textAlign: "start", paddingLeft: 10}}>
<span>Materialize</span>
                            </div>
                        </div>
                        <div style={{border: "grey solid 1px", width: '100%', marginBottom: '1px'}}>
                            <div style={{height: '25px', width: '40%', backgroundColor: "#99D5FF", textAlign: "start", paddingLeft: 10}}>
<span>MySQL</span>
                            </div>
                        </div>
                        <div style={{border: "grey solid 1px", width: '100%', marginBottom: '1px'}}>
                            <div style={{height: '25px', width: '69%', backgroundColor: "#99D5FF", textAlign: "start", paddingLeft: 10}}>
<span>MongoDB</span>
                            </div>
                        </div>
                        <div style={{border: "grey solid 1px", width: '100%', marginBottom: '1px'}}>
                            <div style={{height: '25px', width: '40%', backgroundColor: "#99D5FF", textAlign: "start", paddingLeft: 10}}>
<span>Sequelize</span>
                            </div>
                        </div>
                        <div style={{border: "grey solid 1px", width: '100%', marginBottom: '1px'}}>
                            <div style={{height: '25px', width: '69%', backgroundColor: "#99D5FF", textAlign: "start", paddingLeft: 10}}>
<span>Mongoose</span>
                            </div>
                        </div>
                        <div style={{border: "grey solid 1px", width: '100%', marginBottom: '1px'}}>
                            <div style={{height: '25px', width: '40%', backgroundColor: "#99D5FF", textAlign: "start", paddingLeft: 10}}>
<span>Handlebars</span>
                            </div>
                        </div>
                        <div style={{border: "grey solid 1px", width: '100%', marginBottom: '1px'}}>
                            <div style={{height: '25px', width: '40%', backgroundColor: "#99D5FF", textAlign: "start", paddingLeft: 10}}>
<span>FireBase</span>
                            </div>
                        </div>
                        <div style={{border: "grey solid 1px", width: '100%', marginBottom: '1px'}}>
                            <div style={{height: '25px', width: '90%', backgroundColor: "#99D5FF", textAlign: "start", paddingLeft: 10}}>
<span>VScode</span>
                            </div>
                        </div>
                        <div style={{border: "grey solid 1px", width: '100%', marginBottom: '1px'}}>
                            <div style={{height: '25px', width: '50%', backgroundColor: "#99D5FF", textAlign: "start", paddingLeft: 10}}>
<span>KonvaJS</span>
                            </div>
                        </div>
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