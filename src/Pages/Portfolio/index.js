import React, { Component } from 'react'

class Portfolio extends Component {
    render() {
        return (
            <div>
                <div id="portfolio-page" className="container section">
                    <div className="row">
                        <div className="card col s12 center-align">
                            <h4 className="center-align">Portfolio</h4>
<hr/>
                            <div className="col l6 m6 s12">
                                <div className="card">
                                    <div className="card-content">
                                        <img className="responsive-img" alt="" src="./images/mindsplash.png" />
                                        <span className="card-title">MindSplash</span>
                                        <p className="left-align">Single-page Reactjs web application; a graphing tool that is built on the Mind Mapping concept. Technologies used: ReactJS, KonvaJS, MongoDB, Mongoose, HTML5/CSS3, JavaScript</p><div className="divider"></div>
                                        <a href="https://pure-castle-06277.herokuapp.com/">View in Heroku</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col l6 m6 s12">
                                <div className="card">
                                    <div className="card-content">
                                        <img className="responsive-img" alt="" src="./images/informant.png" />
                                        <span className="card-title">Informant</span>
                                        <p className="left-align">A platform for bloggers that allows its users to write a post articles. Built with NodeJS, ExpressJS, JavaScript, PassportJS local strategy, HTML5/CSS3, Materialize </p><div className="divider"></div>
                                        <a href="https://floating-shelf-39825.herokuapp.com/">View in Heroku</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col l6 m6 s12">
                                <div className="card">
                                    <div className="card-content">
                                        <img className="responsive-img" alt="" src="./images/songsparrow.png" />
                                        <span className="card-title">Song-Sparrow</span>
                                        <p className="left-align">A web app which allows you to search for bands and upcoming concerts with built-in chat functionality between users viewing the page.  </p><div className="divider"></div>
                                        <a href="https://gainstrive.github.io/song-sparrow">View in Github Pages</a>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col l6 m6 s12">
                                <div className="card">
                                    <div className="card-content">
                                        <img className="responsive-img" alt="" src="./images/triviagame.png" />
                                        <span className="card-title">Today's Trivia</span>
                                        <p className="left-align">Trivia game with 30 seconds timer on multiple choice questions. Displays final score stats at the end of the game. Written in JavaScript, HTML and CSS</p><div className="divider"></div>
                                        <a href="https://pav6778.github.io/TriviaGame/">View in Github Pages</a>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col l6 m6 s12">
                                <div className="card">
                                    <div className="card-content">
                                        <img className="responsive-img" alt="" src="./images/hangman.png" />
                                        <span className="card-title">Hangman</span>
                                        <p className="left-align"> HTML/CSS and JavaScript word guess game. Keypress event listener is waiting for user input to match it with the guessed word and displays used letters. Plays a sound for wins and loses. </p><div className="divider"></div>
                                        <a href="https://pav6778.github.io/Word-Guess-Game/">View in Github Pages</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio