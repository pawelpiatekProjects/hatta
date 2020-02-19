import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import Image from "gatsby-image"

export const query = graphql`
    query querySingleArticle($id: String!) {
        datoCmsArticle(id: {eq: $id}) {
            title
            author
            featuredImage {
                fixed{
                    ...GatsbyDatoCmsFixed_tracedSVG
                }
            }
            articleContent{
                ... on DatoCmsParagraph{
                    paragraphContent
                    id
                }
                ... on DatoCmsHeading{
                    headingContent
                    id
                }
                ... on DatoCmsImage{
                    imageData{
                        fixed{
                            ...GatsbyDatoCmsFixed_tracedSVG
                        }
                    }
                    id
                }
            }
        }
    }`


const PostLayout = ({ data }) => {
  // console.log(props)
  return (
    <div>
      <h1>{data.datoCmsArticle.title}</h1>
      <p>{data.datoCmsArticle.author}</p>
      {/*<Image fixed={data.mdx.frontmatter.featuredImage.childImageSharp.fixed}/>*/}
      <div>{data.datoCmsArticle.articleContent.map(item => {
        const itemKey = Object.keys(item)[1];
        console.log(itemKey);

        switch (itemKey) {
          case "paragraphContent":
            return <p  key={item.id}>{item.paragraphContent}</p>
          case "headingContent":
            return <h2 key={item.id}>{item.headingContent}</h2>
          case "imageData":
            return <Image key={item.id} fixed={item.imageData.fixed}/>
            default: return null;
        }
      })}</div>
    </div>
  )
}

export default PostLayout

