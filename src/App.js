import React, { Component } from 'react'
import Dashboard from './Components/Dashboard'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Menu from './Components/Menu'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Dashboard />
        <Footer />
        
      </div>
    )
  }
}
