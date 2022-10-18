import PropTypes from 'prop-types';
import FriendsListItem from './friendsListItem';
import css from "./friends.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendsListItem
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
          key={friend.id}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
