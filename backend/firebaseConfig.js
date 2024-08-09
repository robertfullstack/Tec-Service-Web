const firebase = require('firebase/app');
require('firebase/database');

const firebaseConfig = {
    apiKey: "AIzaSyB5XEuHgm2V0ePTKNs-7SpQLzGcKQYFVLg",
    authDomain: "meet-tea-3db7c.firebaseapp.com",
    projectId: "meet-tea-3db7c",
    storageBucket: "meet-tea-3db7c.appspot.com",
    messagingSenderId: "62321930466",
    appId: "1:62321930466:web:d0517c696fa79c8582eebb"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

module.exports = database;
