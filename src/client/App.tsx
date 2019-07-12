//list of all chirps on homescreen and form to post new chirps
// page for chirp details when button clicked and get request should be made
// for a specific chirp and display the chirp info on the page in a prefilled form
//have delete button to trigger delete request and send user back to main page after
//save edit button triggering a put request and send user back to main after

import * as React from 'react';
import Navbar from './Components/navbar'
import './scss/app';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddChirp from './Components/addchirp'
import Home from "./Components/home"
import EditButton from './Components/editchirp'
import Mentions from './Components/mentions'
export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);
    }


    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/chirp/add" component={AddChirp}></Route>
                    <Route exact path='/chirp/edit/:id' component={EditButton}></Route>
                    <Route exact path='/mentions'component={Mentions}></Route>
                </Switch>
            </Router>

        )
    }
}

//way to declare a type
interface IAppProps {

}

interface IAppState {
}