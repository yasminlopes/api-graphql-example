import { ApolloServer, gql } from 'apollo-server';
import { randomUUID } from 'node:crypto';

/**
 * Under fetching
 * Rota HTTP que retorna dados de menos, ou seja, dados que serão utilizados porém não estão disponíveis
 *
 * Over fetching
 * Rota HTTP que retorna dados de mais, ou seja, dados que não serão utilizados
 */

/**
 * Schema first approach -> Definir o schema antes de implementar a API
 * Code first approach -> Definir o schema a partir da implementação da API
 */

const typeDefs = gql`
  type User {
    id: String!
    name: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!): User!
  }
`;

interface User {
  id: string;
  name: string;
}

const users: User[] = [];

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      users: () => {
        return users;
      },
    },

    Mutation: {
      createUser: (_, args) => {
        const newUser = {
          id: randomUUID(),
          name: args.name,
        };
        users.push(newUser);

        return newUser;
      },
    },
  },
});

server.listen().then(({ url }) => console.log(`🚀 Server ready at ${url}`));
