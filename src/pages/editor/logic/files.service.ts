import Firebase from "firebase";
import { map } from "lodash";

const firebaseConfig = {
  apiKey: "AIzaSyAq7UkaPoR6jiexoO1IBXi0hfSsb9MWOKM",
  authDomain: "timeeditor-7f725.firebaseapp.com",
  databaseURL: "https://timeeditor-7f725.firebaseio.com",
  projectId: "timeeditor-7f725",
  storageBucket: "timeeditor-7f725.appspot.com",
  messagingSenderId: "200668155196",
  appId: "1:200668155196:web:d481d9350bb4b5b2b1e239",
};

const collectionName = "default";
const fileName = "default";

const app = Firebase.initializeApp(firebaseConfig);
const db = app.database();
const filesRef = db.ref(collectionName);

export const getFileNames = async () => {
  const collectionSnapshot = await filesRef.once("value"); //.then(function(snapshot) {
  const collection = collectionSnapshot.val();
  console.log("collection", collection);

  //   const files = map(collection, (value, key) => ({
  //     key,
  //     // content: JSON.parse(value),
  //     content: value,
  //   }));
  const fileNames = map(collection, (value, key) => key);
  console.log("fileNames", fileNames);
  return fileNames;
  //     key,
  //     // content: JSON.parse(value),
  //     content: value,
  //   }));
};

export const getFileContent = async () => {
  await getFileNames();

  const collectionSnapshot = await filesRef.once("value");
  const collection = collectionSnapshot.val();
  const fileContent = collection[fileName];
  const file = JSON.parse(fileContent);
  const content = file.content;

  return content;
};

export const setFileContent = async (content: string) => {
  await filesRef.update({
    default: JSON.stringify({
      content,
    }),
  });
  console.log("update on database");
};
