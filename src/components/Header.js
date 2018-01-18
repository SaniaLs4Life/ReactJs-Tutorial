import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {
    constructor(){
        super();

        this.state = {
            isNavOpen : false
        }
    }
    buttonClicked(){
        this.setState({
            isNavOpen : !this.state.isNavOpen
        })
    }
    render(){
        return(
            <header>
            <nav className="container navbar navbar-expand-lg justify-content-between">
                <Link to="/" className="navbar-brand">HomeWork</Link>
                <button className="navbar-toggler" type="button" onClick={this.buttonClicked.bind(this)}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse" style={{ display: this.state.isNavOpen ? "block" : "none" }}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" activeClassName="active" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" activeClassName="active" className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" activeClassName="active" className="nav-link">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            </header>
        )
    }
}


export default Header