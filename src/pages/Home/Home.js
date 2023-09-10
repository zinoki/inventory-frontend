import React from 'react'
import {RiProductHuntLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import "./Home.scss"
import heroImg from "../../assets/inv-img.png"

const Home = () => {
  return (
    <div className='home'>
      <nav className='container --flex-between'>
        <div className="logo">
          <RiProductHuntLine size={35} />
        </div>
        <ul className="home-links">
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <button className="--btn --btn-primary">
            <Link to="/login">Login</Link>
            </button>
          </li>
          <li>
            <button className="--btn --btn-primary">
              <Link to="/dashboard">Dashboard</Link>
            </button>
          </li>
        </ul>
      </nav>
      {/* Hero Section */}
      <section className="container hero">
        <div className="hero-text">
          <h2>Inventory Management</h2>
          <p>Manage your inventory</p>
          <div className="hero-buttons">
            <button className="--btn --btn-secondary">
              <Link to="/dashboard">1 Month Free Trial</Link>
            </button>
          </div>
          <div className="--flex-start">
            <NumberText num="14K" text="Brand Owners" />
            <NumberText num="23K" text="Active Users" />
            <NumberText num="500+" text="Partners" />
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Inventory" />
        </div>
      </section>
    </div>
  )
}

const NumberText = ({num, text}) => {
  return (
    <div className="--mr">
      <h3 className='--color-white'>{num}</h3>
      <p className='--color-white'>{text}</p>
    </div>
  )
}
export default Home