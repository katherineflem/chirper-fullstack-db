import * as React from 'react'
import { Link } from 'react-router-dom'

//clicking Submit Chirp will take to new page to type in username and message
class Navbar extends React.Component<INavbarProps, INavbarState> {
    render() {
        return (
            <nav className="navbar navbar-light bg-success">
                <Link to="/">
                    <h1 className="text-light">Chirper</h1>
                </Link>
                <Link className="btn btn-outline-light" to="/chirp/add">Submit a Chirp</Link>
                <Link to ='/mentions' className="btn btn-outline-light">Mentions</Link>

            </nav>

        )
    }
}

export default Navbar

interface INavbarProps { }
interface INavbarState { }

