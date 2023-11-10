import React from "react";
import Sidebar from "../Sidebar";
import Searchbar from "../Contents/Searchbar";
import TransactionTable from "../Contents/TransactionTable";
import "./dashboard.css";
const Transactions = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="main-contents">
        <div className="row">
          <div className="col-12">
            <Searchbar></Searchbar>

            {/* Transaction Search Input */}
            <div className="row justify-content-between mb-4 fw-semibold">
              <div className="col-lg-2 col-3 mt-5">
                <p className="fs-4 label">Transactions</p>
              </div>
              <div className="col-lg-4 col-7 mt-5">
                <input
                  type="text"
                  name="search"
                  className="form-control border border-black bg-dark text-light"
                  placeholder="Search for transactions... "
                />
              </div>
            </div>

            {/* Transaction Table */}
            <div className="table-responsive bg2 p-2 rounded fw-semibold">
              <table className="table caption-top table-dark rounded">
                <caption className="mb-3 label">Transaction List</caption>
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Sender</th>
                    <th scope="col">Receiver</th>
                    <th scope="col">Total Amount</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>

                <tbody>
                  <TransactionTable
                    id={12}
                    sender={"@pac42"}
                    receiver={"@lorem"}
                    amount={"1298 ETB"}
                    date={"Jul 13 2023"}
                    status={"complete"}
                  ></TransactionTable>

                  <TransactionTable
                    id={15}
                    sender={"@pac42"}
                    receiver={"@ipsun"}
                    amount={"128 ETB"}
                    date={"Aug 23 2023"}
                    status={"pending"}
                  ></TransactionTable>

                  <TransactionTable
                    id={11}
                    sender={"@pac42"}
                    receiver={"@dolor"}
                    amount={"128 ETB"}
                    date={"Oct 3 2023"}
                    status={"decline"}
                  ></TransactionTable>

                  <TransactionTable
                    id={7}
                    sender={"@pac42"}
                    receiver={"@dolor"}
                    amount={"28 ETB"}
                    date={"Oct 3 2023"}
                    status={"decline"}
                  ></TransactionTable>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
