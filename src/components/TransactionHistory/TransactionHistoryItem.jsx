import clsx from "clsx";
import s from "./TransactionHistory.module.css";

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <>
      <td className={clsx(s.firstCol)}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};

export default TransactionHistoryItem;
