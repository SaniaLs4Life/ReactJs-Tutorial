import React from 'react'
import { Link } from 'react-router'
import AuthView from './AuthView'

export const HomeView = () => (
  <div className="home-container">
    <div className="container">
      <h1>Need Help While Doing Your HomeWork?</h1>

      <AuthView />

    </div>
  </div>
)

export default HomeView
