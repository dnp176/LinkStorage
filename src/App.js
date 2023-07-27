import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  const [data, setData] = useState([]);

  const handleSearch = () => {
    const input = document.getElementById('myInput');
    const filter = input.value.toUpperCase();
    const table = document.querySelector('.table');
    const rows = table.getElementsByTagName('tr');
  
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName('td');
      let found = false;
  
      for (let j = 0; j < cells.length; j++) {
        const cell = cells[j];
        if (cell) {
          const value = cell.textContent || cell.innerText;
          if (value.toUpperCase().indexOf(filter) > -1) {
            found = true;
            break;
          }
        }
      }
  
      if (found) {
        rows[i].style.display = '';
      } else {
        rows[i].style.display = 'none';
      }
    }
  };
  
  const input = document.getElementById('myInput');
  if (input) {
    input.addEventListener('input', handleSearch);
  }
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
            'https://api.github.com/repos/dnp176/AutomationMaterialCode/contents/data.json'
        );

        if (response.ok) {
          const json = await response.json();
          const content = atob(json.content); // Decode Base64-encoded content

          // Parse the JSON content
          const jsonData = JSON.parse(content);

          if (Array.isArray(jsonData)) {
            setData(jsonData);
          }
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div class="container pt-5"> 
      <h2>Important Links</h2>
      <input class="form-control" id="myInput" type="text" placeholder="Search.."></input>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Descriptions</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td><a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default App;
