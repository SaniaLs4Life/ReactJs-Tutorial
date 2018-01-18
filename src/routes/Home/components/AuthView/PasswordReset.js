import React, { Component } from 'react'
import { Link } from 'react-router'

const PasswordReset = ({ onViewChange }) => (
    <div>
        <div>
            <form className="form-inline">
                <div className="form-group">
                    <input style={{ width: "485px" }} type="text" className="form-control" placeholder="E-mail" />
                </div>
                <button style={{ marginLeft: "10px" }} type="submit" className="btn btn-primary">Reset</button>
            </form>

            <p>
                <b><u><Link to="/" className="links" onClick={e => {
                    e.preventDefault()
                    onViewChange(1)
                }}>SIGN IN</Link></u></b>
            </p>
        </div>
    </div>
)

export default PasswordReset;