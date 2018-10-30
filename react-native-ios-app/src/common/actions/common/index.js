const fetchData = query =>
    fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
    }).then(res => res.json());

const getFetchQuery = (tableName, fields) => `{${tableName}{${fields}}}`;

export default {
    getHotels: () => fetchData(getFetchQuery('hotels', 'id,name,city,cover')),
    getReservations: () =>
        fetchData(getFetchQuery('reservations', 'id,name,hotelName,arrivalDate,departureDate')),
//in below API hotelId is the id of hotels which we gets from the above getHotels API
    createReservation: ({ name, hotelId, arrivalDate, departureDate }) =>
        fetchData(
            `mutation{createReservation(name:"${name}",hotelId:"${hotelId}",arrivalDate:"${arrivalDate}",departureDate:"${departureDate}"){id,name,arrivalDate,hotelName,departureDate}}`
        )
};


