let db = {
  hotels: [
    {
      id: '1',
      name: 'Holiday Inn',
      city: 'New York',
      noOfRooms: 3,
      cover: 'http://localhost:4000/images/hotel_111.jpeg'
    },
    {
      id: '2',
      name: 'The Roosevelt',
      city: 'New York',
      noOfRooms: 1,
      cover: 'http://localhost:4000/images/hotel_222.jpeg'
    },
    {
      id: '3',
      name: 'Pod 39',
      city: 'California',
      noOfRooms: 4,
      cover: 'http://localhost:4000/images/hotel_333.jpeg'
    },
    {
      id: '4',
      name: 'Grand Hyatt',
      city: 'Bostan',
      noOfRooms: 5,
      cover: 'http://localhost:4000/images/hotel_444.jpeg'
    },
    {
      id: '5',
      name: 'The Palazzo at The Venetian',
      city: 'New York',
      noOfRooms: 7,
      cover: 'http://localhost:4000/images/hotel_555.jpeg'
    },
    {
      id: '6',
      name: 'The Venetian Las Vegas',
      city: 'Las Vegus',
      noOfRooms: 9,
      cover: 'http://localhost:4000/images/hotel_666.jpeg'
    }
  ],
  reservations: []
};

export default {
  get: tableName => db[tableName],
  save: (tableName, document) => {
    document.id = '' + new Date().getTime();
    db[tableName].push(document);
    return document;
  },
  findOne: (tableName, filter) => {
    return db[tableName].find(filter);
  }
};
