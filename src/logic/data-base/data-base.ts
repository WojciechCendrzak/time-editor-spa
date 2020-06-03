import Firebase from "firebase";

// TODO: move to ENV
const firebaseConfig = {
  apiKey: "AIzaSyAq7UkaPoR6jiexoO1IBXi0hfSsb9MWOKM",
  authDomain: "timeeditor-7f725.firebaseapp.com",
  databaseURL: "https://timeeditor-7f725.firebaseio.com",
  projectId: "timeeditor-7f725",
  storageBucket: "timeeditor-7f725.appspot.com",
  messagingSenderId: "200668155196",
  appId: "1:200668155196:web:d481d9350bb4b5b2b1e239"
};

const app = Firebase.initializeApp(firebaseConfig);
export const database = app.database();
