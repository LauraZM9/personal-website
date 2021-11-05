import React from "react";
import HomePage from "./pages/home"
import {Router} from "react-router-dom"

export default class App extends React.Component {
    componentDidMount() {
        initAll();
    }
    render() {
        return(
            <>
                <main>
                    <Router>
                        <Route path="/" component={HomePage}/>
                    </Router> 
                </main>
            </>
        )
    }
}