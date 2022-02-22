import './App.css';
import producerContacts from './contacts.json';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(producerContacts.splice(0, 5));
  const randomIndex = Math.floor(Math.random() * producerContacts.length);
  const addContact = () => {
    setContacts([...contacts, producerContacts[randomIndex]]);
  };
  return (
    <div className="App">
      <button onClick={addContact}>Add new random contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
