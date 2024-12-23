import { gql } from "apollo-server";

const typeDefs = gql`
    type Query {
        welcome: String
        cities: [city]
        city(id: String!, nome: String!): city!
        points: [point]
        point(id: String!): point!
        pointsOfCity(cityId: String): [point]
    }

    type Mutation {
        addCity(newCity: addCityInput): city!
        addPoint(newPoint: addPointInput): point!
        updateCity(city: updateCityInput): city!
        ExcluirCity(id: ID!): city!
    }

    # Segundo nível
    input updateCityInput {
        id: String
        nome: String
        pais: String
    }

    input addCityInput {
        nome: String
        pais: String
    }

    input addPointInput {
        nome: String
        preco: Float
        desconto: Float
        latitude: Float
        longitude: Float
        cityId: String
    }

    type city {
        id: String
        nome: String
        pais: String
        atualizado: Int
    }

    type point {
        id: String
        nome: String
        preco: Float
        desconto: Float
        latitude: Float
        longitude: Float
        cityId: String
    }
`;

export default typeDefs;