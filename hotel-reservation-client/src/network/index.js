const fetchData = query =>
  fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json());

const getFetchQuery = (tableName, fields) => `{${tableName}{${fields}}}`;

export default {
  getHotels: () => fetchData(getFetchQuery('hotels', 'id,name,city,cover,noOfRooms')),
  getReservations: () =>
    fetchData(
      getFetchQuery('reservations', 'id,name,hotelName,arrivalDate,departureDate,noOfRooms')
    ),
  createReservation: ({ name, hotelId, arrivalDate, departureDate, noOfRooms }) =>
    fetchData(
      `mutation{createReservation(name:"${name}",hotelId:"${hotelId}",arrivalDate:"${arrivalDate}",noOfRooms:${noOfRooms},departureDate:"${departureDate}"){id,name,arrivalDate,hotelName,departureDate,noOfRooms}}`
    )
};
