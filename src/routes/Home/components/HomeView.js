import React from 'react'
import { Link } from 'react-router'

export const HomeView = () => (
  <div className="home-container">
    <div className="container">
      <h1>Need Help While Doing Your HomeWork?</h1>

      <form className="form-inline">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="E-mail" />
        </div>
        <div className="form-group mx-sm-3">
          <input type="password" className="form-control" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <Link to="#" className="links">Forgot password?</Link>
      </form>

      <p>
        Don't you have an account ? <br />
        It's for free! <b><u><Link to="#" className="links">SIGN UP</Link></u></b>
      </p>
    </div>
  </div>
)

export default HomeView
