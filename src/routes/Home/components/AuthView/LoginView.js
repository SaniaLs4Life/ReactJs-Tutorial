import React, { Component } from 'react'
import { Link } from 'react-router'

const loginView = ({ onViewChange }) => (
    <div>
        <div>
            <form className="form-inline">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="E-mail" />
                </div>
                <div className="form-group mx-sm-3">
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <Link to="#" className="links" onClick={e => {
                    e.preventDefault()
                    onViewChange(3)
                }}>Forgot password?</Link>
            </form>

            <p>
                Don't you have an account ? <br />
                It's for free! <b><u><Link to="/" className="links" onClick={e => {
                    e.preventDefault()
                    onViewChange(2)
                }}>SIGN UP</Link></u></b>
            </p>
        </div>
    </div>
)


export default loginView;