import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import Navigation from "../components/Navigation/Navigation";
import Button from "../components/Button/Button";
import { graphql } from "gatsby";

const IndexPage = ({data}) => (
  <>
    <h1>Hello Hatta</h1>
    <p>While artists work from real to the abstract, architects must work from the abstract to the real.</p>
    <Button>estimate project</Button>
    <img src={data.file.publicURL}/>
  </>
)

export const query = graphql`
  {
    __typename
    file(name: {eq: "hero"}) {
      publicURL
    }
  }
`;

export default IndexPage




