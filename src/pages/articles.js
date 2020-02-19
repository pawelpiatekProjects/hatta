import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import ArticlePreview from '../components/ArticlePreview/ArticlePreview';
import PageInfo from '../components/PageInfo/PageInfo';
import slugify from 'slugify';

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

const pageData = {
    title: 'articles',
    paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
}

const ArticlesPage = ({ data }) => {

  const {allDatoCmsArticle: {nodes}} = data;

  return (
    <>
      <PageInfo title={pageData.title} paragraph={pageData.paragraph}/>
      <ArticlesWrapper>
        {nodes.map(({title, author, featuredImage, id}) => (
          <ArticlePreview
            key={id}
            title={title}
            image={featuredImage.fluid}
            slug={slugify(title,{lower:true})}
          />
        ))}
      </ArticlesWrapper>
    </>
    )

};

export const query = graphql`
    {
        allDatoCmsArticle {
            nodes {
                    id
                    title
                    author
                    featuredImage {
                        fluid{
                            ...GatsbyDatoCmsFluid_tracedSVG
                        }
                }
            }
        }
    }
`;

export default ArticlesPage;
