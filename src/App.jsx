import React, { useState, useEffect } from 'react';
import logo from './assets/logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const [compteur1, setCompteur1] = useState(0);
  const [compteur2, setCompteur2] = useState(0);
  const [blog, setBlog] = useState([]);

  
  useEffect(() => {
    document.title = `Compteur 1 :${compteur1}|Compteur 2 :${compteur2}`;
  }, [compteur1, compteur2]);

  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {setBlog(response.data);});}, []);

  return (
    <div className="App container text-center py-5">
      <img src={logo} alt="logo" style={{ height: 80 }} />
      <h1>ZOOMxx</h1>

      <div>
        <h3>Compteur 1 : {compteur1}</h3>
        <h3>Compteur 2 : {compteur2}</h3>
      </div>

      <div>
        <button onClick={() => setCompteur1(compteur1 + 1)}>Compteur 1</button>
        <button onClick={() => setCompteur2(compteur2 + 1)}>Compteur 2</button>
      </div>

      <div>
        <table border="1" align="center">
          <thead>
            <tr>
              <th>Blog</th>
            </tr>
          </thead>
          <tbody>
            {blog.map((bl, index) => (
              <tr key={index}>
                <td>{bl.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;


