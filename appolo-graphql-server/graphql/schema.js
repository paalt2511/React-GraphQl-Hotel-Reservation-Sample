import { gql } from 'apollo-server-express';
export default gql`
  type Hotel {
    id: ID!
    name: String
    city: String
    cover: String
    noOfRooms: Int
  }

  type Reservation {
    id: ID!
    name: String
    hotelName: String
    arrivalDate: String
    departureDate: String
    noOfRooms: Int
  }

  type Query {
    hotels: [Hotel]
    reservations: [Reservation]
    getReservation(id: String): Reservation
  }

  type Mutation {
    createReservation(
      name: String
      hotelId: String
      arrivalDate: String
      departureDate: String
      noOfRooms: Int
    ): Reservation
  }
`;
