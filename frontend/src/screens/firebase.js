// Importar funções específicas do Firebase usando a abordagem modular
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCL75e3y4pO4siCi3N_jjBDUmLrvFhsba8",
    authDomain: "atrativo-social.firebaseapp.com",
    projectId: "atrativo-social",
    storageBucket: "atrativo-social.appspot.com",
    messagingSenderId: "147961984705",
    appId: "1:147961984705:web:38893f9ea008de50328640",
    measurementId: "G-F09PQ0D4R1"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Auth e o Database
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database, createUserWithEmailAndPassword, signInWithEmailAndPassword, ref, set };
