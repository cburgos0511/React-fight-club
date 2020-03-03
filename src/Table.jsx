import React from "react";
import TableItem from "./TableItem.jsx";

const Table = ({ getId, data }) => {
  const item = data.map(a => {
    return (
      <TableItem
        click={getId}
        id={a.id}
        key={a.id}
        fname={a.fname}
        lname={a.lname}
        wins={a.wins}
      />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>WINS</th>
        </tr>
      </thead>
      <tbody>{item}</tbody>
    </table>
  );
};
export default Table;
