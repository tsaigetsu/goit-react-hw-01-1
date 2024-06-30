import clsx from "clsx";
import s from "./TransactionHistory.module.css";
import TransactionHistoryItem from "./TransactionHistoryItem";

const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transaction) => (
          <tr key={transaction.id} className={clsx(s.tr)}>
            <TransactionHistoryItem
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
