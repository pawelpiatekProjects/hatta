import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import Navigation from "../components/navigation/navigation"


const IndexPage = () => (
  <>
    <Navigation/>
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
