import clsx from "clsx";
import s from "./Profile.module.css";

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={clsx(s.userProfile)}>
      <div className={clsx(s.userInfo)}>
        <img className={clsx(s.userImage)} src={avatar} alt="User avatar" />
        <p className={clsx(s.userName)}>{username}</p>
        <p className={clsx(s.userDesc)}>@{tag}</p>
        <p className={clsx(s.userDesc)}>{location}</p>
      </div>

      <ul className={clsx(s.list)}>
        <li className={clsx(s.listItem)}>
          <span>Followers</span>
          <span className={clsx(s.solidSpan)}>{followers}</span>
        </li>
        <li className={clsx(s.listItem)}>
          <span>Views</span>
          <span className={clsx(s.solidSpan)}>{views}</span>
        </li>
        <li className={clsx(s.listItem)}>
          <span>Likes</span>
          <span className={clsx(s.solidSpan)}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
