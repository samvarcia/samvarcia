import React from 'react'
import { Instagram } from 'react-feather';
import { Twitter } from 'react-feather';
import { GitHub } from 'react-feather';
import '../assets/styles/components/Header.css'

export default function Header() {
  return(
    <header>
      <h1>samvarcia</h1>
      <nav>
        <a href="https://www.instagram.com/samvarcia/" target="blank"><Instagram color="white" size={35} /></a>
        <a href="https://twitter.com/samvarcia" target="blank"><Twitter color="white" size={35} /></a>
        <a href="https://github.com/samvarcia" target="blank"><GitHub color="white" size={35} /></a>
      </nav>
    </header>
  )
}