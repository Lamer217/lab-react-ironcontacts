import './App.css';
import producerContacts from './contacts.json';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(producerContacts.slice(0, 5));
  const randomIndex = Math.floor(Math.random() * producerContacts.length);
  const addContact = () => {
    setContacts([...contacts, producerContacts[randomIndex]]);
  };
  const sortByName = () => {
    setContacts([
      ...contacts.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }),
    ]);
  };
  const sortByPopularity = () => {
    setContacts([...contacts.sort((a, b) => b.popularity - a.popularity)]);
  };
  const removeActor = id => {
    setContacts([...contacts.filter(actor => actor.id !== id)]);
  };
  return (
    <div className="App">
      <button onClick={addContact}>Add new random contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt="Actors" height="100" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : '❌'}</td>
              <td>{contact.wonEmmy ? '🏆' : '❌'}</td>
              <td>
                <button onClick={removeActor.bind(this, contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
