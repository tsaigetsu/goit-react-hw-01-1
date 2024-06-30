import clsx from "clsx";
import s from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={clsx(s.friendsList)}>
      {friends.map((friend) => (
        <li key={friend.id} className={clsx(s.friendsItem)}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
