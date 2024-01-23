const Transactions = () => {
  return (
    <div>
      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search by purchase order"
        />
        <input type="date" name="" id="" placeholder="Date" />
        <input type="text" name="" id="" placeholder="Type" />
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>PO/CO</th>
              <th>TYPE</th>
              <th>Transaction Date</th>
              <th>Time id</th>
              <th>Qty</th>
              <th>Transaction Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>999999</td>
              <td>Dispute Settlement</td>
              <td>June 23,2023</td>
              <td>999999</td>
              <td>1</td>
              <td>$99.99</td>
              <td>Settled</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
