import React from "react";

const TableItem = ({ id, fname, lname, wins, click }) => {
  return (
    <>
      <tr onClick={() => click(id, fname, lname)}>
        <td>{lname + ", " + fname}</td>
        <td className="winns">{wins}</td>
      </tr>
    </>
  );
};
export default TableItem;
