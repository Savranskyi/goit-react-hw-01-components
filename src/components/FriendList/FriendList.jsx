import PropTypes from "prop-types";

import s from "./FriendList.module.css";
import FriendListItem from "./FriendListItem/FriendsListItem";

function FriendList(friends) {
  return (
    <ul className={s["friend-list"]}>
      {friends.friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
