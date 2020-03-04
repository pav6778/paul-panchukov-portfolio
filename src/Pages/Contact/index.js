import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div id="contact-form">
                        <h4 className="center-align" style={{marginBottom: 100}}>Contact</h4>

                        <div className="container">

                            <div>
                                <form
                                    className="gform"
                                    method="POST"
                                    action="https://script.google.com/macros/s/AKfycbzHSKTDOVCy8klLS-q--3XBUsuRT4KtQtBM9_c0/exec"
                                    id="emailForm">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input
                                                placeholder="John Smith"
                                                id="_name"
                                                name="name"
                                                type="text"
                                                required
                                            />
                                            <label htmlFor="_name">Name</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input
                                                placeholder="mr_smith@gmail.com"
                                                id="_email"
                                                name="email"
                                                type="email"
                                                required
                                            />
                                            <label htmlFor="_email">Email</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">mode_edit</i>
                                            <textarea
                                                style={{ resize: 'none' }}
                                                placeholder="text"
                                                id="_message"
                                                type="text"
                                                className="materialize-textarea"
                                                data-length="120"
                                                rows="6"
                                                name="message"
                                                required></textarea>
                                            <label htmlFor="_message">Message</label>
                                        </div>
                                        <button type="submit" className="btn waves-effect waves-light black">
                                            <b>SEND</b><i className="material-icons right">send</i>
                                        </button>
                                        <div style={{ display: 'none' }}
                                            className="thankyou_message">

                                            <h3 className="center-align">Message recieved.<b>Thank you!</b>
                                            </h3>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact