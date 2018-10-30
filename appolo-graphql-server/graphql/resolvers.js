import db from '../db';
const resolvers = {
  Query: {
    hotels: () => db.get('hotels'),
    reservations: () => db.get('reservations'),
    getReservation: (root, { id }, context, info) =>
      db.findOne('reservations', reservation => reservation.id === id)
  },
  Mutation: {
    createReservation: (root, { name, hotelId, noOfRooms, arrivalDate, departureDate }) =>
      db.save('reservations', {
        name,
        hotelName: db.findOne('hotels', hotel => hotel.id === hotelId).name,
        arrivalDate,
        departureDate,
        noOfRooms
      })
  }
};
export default resolvers;
