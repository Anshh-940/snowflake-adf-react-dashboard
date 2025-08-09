import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/data") // <-- Your Node API endpoint
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Snowflake Sales Data</h1>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            {data.length > 0 && Object.keys(data[0]).map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {Object.values(row).map((val, i) => (
                <td key={i}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

