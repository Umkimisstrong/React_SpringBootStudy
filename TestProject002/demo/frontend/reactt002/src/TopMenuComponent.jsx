import React, {Component} from "react";
import {Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import DashboardComponent from "./Dashboard";
import MainComponent from "./MainComponent";
import ApiComponent from "./ApiComponent";

class TopMenuComponent extends Component {
    render() {
        return (
            <Router>
                <Navbar bg="dark" variant="dark" className="mb-4">
                    <Navbar.Brand href="/">
                        Home
                    </Navbar.Brand>
                    <Navbar.Brand href="/main">
                        Main
                    </Navbar.Brand>
                    <Navbar.Brand href="/dashboard">
                        Dashboard
                    </Navbar.Brand>
                    <Navbar.Brand href="/api">
                        Api
                    </Navbar.Brand>
                </Navbar>
                <Routes>
                    <Route path="/main" element={<MainComponent />}></Route>
                    <Route path="/dashboard" element={<DashboardComponent />}></Route>
                    <Route path="/api" element={<ApiComponent />}></Route>
                </Routes>
                
            </Router>
        )
    }
}

export default TopMenuComponent