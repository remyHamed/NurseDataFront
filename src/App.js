import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the change from Switch to Routes
import './App.css';
import Home from "./scenes/Home/Home";
import NurseInformation from "./scenes/NurseInformation/NurseInformation"; // Make sure the path matches the file location

function App() {
    return (
        <Router>
            <Routes> {/* Update to Routes */}
                <Route exact path="/" element={<Home />} />
                <Route path="/nurseinformation" element={<NurseInformation />} />
            </Routes>
        </Router>
    );
}

export default App;
