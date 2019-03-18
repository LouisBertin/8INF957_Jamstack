import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data }) => (
    <Layout>
        <SEO title="Posts" />
        <h1>All Posts</h1>
        <ul>
            {data.allStrapiPost.edges.map(document => (
                <li key={document.node.id}>
                    <h2>
                        <Link to={`/${document.node.id}`}>{document.node.title}</Link>
                    </h2>
                    <p>{document.node.content}</p>
                </li>
            ))}
        </ul>

        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default SecondPage

export const pageQuery = graphql`
    query IndexQuery {
        allStrapiPost {
            edges {
                node {
                    id
                    title
                    content
                }
            }
        }
    }
`
