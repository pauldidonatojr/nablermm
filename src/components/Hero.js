import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
function Hero() {
 return (
  <Wrapper>
   <div className="container">
    <Link to={{ pathname: 'https://tinyurl.com/4ubxa88e' }} target="_blank">
     Login
    </Link>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.div`
 height: 75vh;
 padding: 2rem;
 border: 2px black solid;

 display: grid;
 justify-content: center;
 align-items: center;
 .container {
  background-color: lightgrey;
  border: 5px black solid;
  padding: 15rem;
 }
`
export default Hero
