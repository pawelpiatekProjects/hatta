import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Navigation from "../components/Navigation/Navigation"
import Button from "../components/Button/Button"
import { graphql } from "gatsby"
import Image from 'gatsby-image';

const ContentWrapper = styled.div`
width: 65%;
height: calc(100vh - 80px);
text-align: right;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;

h1{
font-size: 60px;
margin: 0px;
width: 60%;
line-height: .9;
}

p{
margin: 20px 0 40px;
width: 40%;
}
`

const StyledImage = styled(Image)`
position: absolute !important;
top: 0;
right: 0;
width: 35%;
height: 100vh;
object-fit: cover;
`;

const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      <h1>Your new space</h1>
      {console.log(data)}
      <p>While artists work from real to the abstract, architects must work from the abstract to the real.</p>
      <Button>estimate project</Button>
    </ContentWrapper>

      <StyledImage fluid={data.file.childImageSharp.fluid}/>

  </>
)

export const query = graphql`
    {
        file(name:{eq: "hero"}){
            childImageSharp{
                fluid(maxWidth: 800, maxHeight: 1200, quality: 100){
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`

export default IndexPage




