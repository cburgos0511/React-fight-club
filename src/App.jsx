import React, { useState } from "react";
import Table from "./Table";
import "./styles.css";
const App = () => {
  const [data, setData] = useState([
    { id: 0, fname: "Cruz", lname: "Burgos", wins: 0 },
    { id: 1, fname: "Chru", lname: "Gos", wins: 0 },
    { id: 2, fname: "Luz", lname: "Moch", wins: 0 },
    { id: 3, fname: "Yum", lname: "Hiu", wins: 0 },
    { id: 4, fname: "How", lname: "Burt", wins: 0 },
    { id: 5, fname: "Loiz", lname: "Poiz", wins: 0 }
  ]);
  const [f1, setF1] = useState({ id: null, name: "F1" });
  const [f2, setF2] = useState({ id: null, name: "F2" });
  const [winner, setWinner] = useState({ id: null, name: "No winner" });
  const [s, setS] = useState(true);

  const fight = () => {
    let num = Math.floor(Math.random() * 100);
    if (num > 49) {
      setWinner({ id: f1.id, name: f1.name });
    } else {
      setWinner({ id: f2.id, name: f2.name });
    }
    addPoint();
  };

  const addPoint = () => {
    let newData = data.map(item =>
      item.id === winner.id ? { ...item, wins: item.wins + 1 } : item
    );
    setData([...newData]);
  };

  const getFighter = (i, n, l) => {
    let data = { id: i, name: l + ", " + n };
    if (s) {
      setF1(data);
    } else {
      setF2(data);
    }
  };

  const selection = s ? "Select F1" : "Select F2";
  return (
    <div className="App">
      <div className="tt">
        <Table getId={getFighter} data={data} />
        <div>
          <div className="fighters">
            <div className="f">
              <h1>{f1.name}</h1>
            </div>
            <div className="f">
              <h1>{f2.name}</h1>
            </div>
          </div>
          <div className="winss">
            <h1>{winner.name}</h1>
          </div>
          <button onClick={fight} className="btn">
            Fight
          </button>
        </div>
      </div>
      <button className="btn" onClick={() => setS(!s)}>
        {selection}
      </button>
    </div>
  );
};
export default App;
