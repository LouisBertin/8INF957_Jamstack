import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PostPage = ({ data }) => (
    <Layout>
        <SEO title="Post" />
        <h1>{data.strapiPost.title}</h1>
        <p>{data.strapiPost.content}</p>

        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default PostPage

export const query = graphql`
    query ArticleTemplate($id: String!) {
        strapiPost(id: {eq: $id}) {
            title
            content
        }
    }
`