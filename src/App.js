import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<News key="general"  pageSize={9} country="in" category="general" apiKey="6d3594a536674c73a5d552b26e184de6" />} />
            <Route exact path="/business" element={<News key="business" pageSize={9} country="in" category="business" apiKey="6d3594a536674c73a5d552b26e184de6" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={9} country="in" category="entertainment" apiKey="6d3594a536674c73a5d552b26e184de6" />} />
            <Route exact path="/health" element={<News key="health" pageSize={9} country="in" category="health" apiKey="6d3594a536674c73a5d552b26e184de6" />} />
            <Route exact path="/science" element={<News key="science" pageSize={9} country="in" category="science" apiKey="6d3594a536674c73a5d552b26e184de6" />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={9} country="in" category="sports" apiKey="6d3594a536674c73a5d552b26e184de6" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={9} country="in" category="technology" apiKey="6d3594a536674c73a5d552b26e184de6" />} />

          </Routes>
        </Router>
      </div>
    )
  }
}
