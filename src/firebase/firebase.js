import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCn6Wgdy1_-oEQ-95foJBhZKJwv1zCRdfE",
  authDomain: "expensify-7b2cf.firebaseapp.com",
  databaseURL: "https://expensify-7b2cf.firebaseio.com",
  projectId: "expensify-7b2cf",
  storageBucket: "expensify-7b2cf.appspot.com",
  messagingSenderId: "54998764552"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: 'Andres Chaves García',
  age: 24,
  isSingle: true,
  location: {
    city: 'San Jose',
    country: 'Costa Rica'
  }
});

database.ref('location').ref('city').set('Liberia');