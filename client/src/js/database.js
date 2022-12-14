import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => { 
  console.log('put to the database');
  // creates the connection to the database and version
  const jateDb = await openDB('jate', 1);
  // creates a new transaction (database, data privilege)
  const transaction = jateDb.transaction('jate', 'readwrite');
  // opens selected object store
  const store = transaction.objectStore('jate');
  // updates store with content
  const request = store.put({id:1, value: content})
  
  //confirmation of request
  const result = await request;

  console.log('data saved to db', result.value);

}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('get to the database');
  const jateDb = await openDB('jate', 1);
  const transaction = jateDb.transaction('jate', 'readonly');
  const store = transaction.objectStore('jate');
  const request = store.get(1);
  const result = await request;

  if (result) {
    console.log('data retreived from database', result.value)
    return result.value;
  } else if (!result) {
    console.log('data not found in database')
    return;
  }
}

initdb();
