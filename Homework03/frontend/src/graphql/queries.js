import { gql } from 'apollo-boost'

export const POSTS_QUERY = gql`
query {
  posts {
    title
    body
    author {
      name
    }
    published
  }
}
`
export const AUTHORS_QUERY = gql`
  query {
    users{
      id
      name
      posts{
        id
        title
        body
      }
    }
  }
`

