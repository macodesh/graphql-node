import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

const typeDefs = `#graphql
  type User {
    email: String!
    avatar: String
    friends: [User]!
  }

  type Query {
    user: User!
  }
`

const resolvers = {
  Query: {
    user: () => ({
      email: 'test',
      avatar: 'test',
      friends: []
    })
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
})

console.log(`🚀 Server ready at: ${url}`)
