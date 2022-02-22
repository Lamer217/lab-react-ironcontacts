import './App.css';
import producerContacts from './contacts.json';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(producerContacts.slice(0, 5));
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
