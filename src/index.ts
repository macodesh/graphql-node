import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// Definição de tipos GraphQL.
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

// Resolvedores para as consultas GraphQL.
const resolvers = {
  Query: {
    user: () => ({
      email: 'test',
      avatar: 'test',
      friends: []
    })
  }
}

// Criação de uma instância do servidor Apollo.
const server = new ApolloServer({
  typeDefs,
  resolvers
})

// Inicialização do servidor standalone Apollo.
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
})

// Exibir mensagem indicando que o servidor está pronto.
console.log(`🚀 Server ready at: ${url}`)
