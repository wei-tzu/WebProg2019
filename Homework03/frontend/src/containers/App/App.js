import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Dropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem
} from 'reactstrap'
import { Card, CardHeader, CardFooter, CardBody } from 'reactstrap'
import {
  CREATE_POST_MUTATION,
  POSTS_SUBSCRIPTION,
  AUTHORS_QUERY,
  POSTS_QUERY,
  USERS_SUBSCRIPTION
} from '../../graphql'
import Post from '../../components/Post/Post'
import classes from './App.module.css'

let unsubscribe = null

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formAuthor: 'select',
      formTitle: '',
      formBody: ''
    };
  }
  show = e => {
    
  }


  handleFormSubmit = e => {
    e.preventDefault()
    
    const { formTitle, formBody, formAuthor } = this.state
    console.log(formAuthor)
    if (!formTitle || !formBody) return
    this.createPost({
      variables: {
        title: formTitle,
        body: formBody,
        published: true,
        authorId: formAuthor,
      }
    })

    this.setState({
      formTitle: '',
      formBody: '',
      formAuthor:''
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className={classes.title}>Modern GraphQL Tutorial</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="6" className={classes.form}>
            <Mutation mutation={CREATE_POST_MUTATION}>
              {createPost => {
                this.createPost = createPost

                return (
                  <Form onSubmit={this.handleFormSubmit}>
                    <FormGroup row>
                      <Label for="title" sm={2}>
                          Author
                      </Label>
                      <Col sm={10}>
                      <Query query={AUTHORS_QUERY}>
                      {({ loading, error, data, subscribeToMore }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error :(((</p>

                        const authors = data.users.map(({id,name,posts}) => (
                          <option key={id} value = {id}>{name}</option>
                        ))
                        return <Input type="select" onChange={e =>
                          this.setState({ formAuthor: e.target.value })
                        }>{authors}</Input>
                      }}
                      </Query>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="title" sm={2}>
                        Title
                      </Label>
                      <Col sm={10}>
                        <Input
                          name="title"
                          value={this.state.formTitle}
                          id="title"
                          placeholder="Post title..."
                          onChange={e =>
                            this.setState({ formTitle: e.target.value })
                          }
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for="body">Body</Label>
                      <Input
                        type="textarea"
                        name="body"
                        value={this.state.formBody}
                        id="body"
                        placeholder="Post body..."
                        onChange={e =>
                          this.setState({ formBody: e.target.value })
                        }
                      />
                    </FormGroup>
                    <Button type="submit" color="primary">
                      Post!
                    </Button>
                  </Form>
                )
              }}
            </Mutation>
          </Col>
          <Col xs="6">
          <Query query={AUTHORS_QUERY}>
              {({ loading, error, data, subscribeToMore }) => {
                if (loading) return <p>Loading...</p>
                if (error) return <p>Error :(((</p>

                const authors_of_posts = data.users.map(({id,name,posts}) => (
                  <Card>
                    <CardHeader onclick={this.show}>{name} {posts.length}</CardHeader>
                    {posts.map(({id,title,body}) => (<CardBody>{title}</CardBody>))}
                  </Card>
                ))
                

                return <div>{authors_of_posts}</div>
              }}
            </Query>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
