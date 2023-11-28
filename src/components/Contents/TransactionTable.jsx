
import React from "react";

const TransactionTable = ({ id, sender, receiver, amount, date, status }) => {
  const statusStyle = (status) => {
    if (status === "complete") {
      return "bg-success small text-center rounded py-2 bi-check";
    } else if (status === "pending") {
      return "bg-primary small text-center rounded py-2 bi-hourglass-split";
    } else {
      return "bg-danger small text-center rounded py-2 bi-x";
    }
  };
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{sender}</td>
        <td>{receiver}</td>
        <td>{amount}</td>
        <td>{date}</td>
        <td>
          <p className={statusStyle(status)}> {status}</p>
        </td>
      </tr>
    </>
  );
};

export default TransactionTable;
