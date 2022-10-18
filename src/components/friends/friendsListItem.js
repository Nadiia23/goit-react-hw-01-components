import PropTypes from 'prop-types';
import css from "./friends.module.css";

function FriendsListItem({ avatar, name, isOnline}) {
  return (
     <li className={css.item}>
          <span className={isOnline ? `${css.online}` : `${css.ofline}`}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
</li>
  );
}; 

FriendsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
};

export default FriendsListItem
