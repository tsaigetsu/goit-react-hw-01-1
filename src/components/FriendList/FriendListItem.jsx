import clsx from "clsx";
import s from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
    const status = isOnline ? "Online" : "Offline"
    return (
        <>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p className={clsx(isOnline? s.green : s.red)}>{status}</p>
        </>
    )
}

export default FriendListItem   