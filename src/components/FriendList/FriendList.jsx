import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map((item) => {
        return (
          <li className={styles.item} key={item.id}>
            <FriendListItem name={item.name} avatar={item.avatar} isOnline={item.isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
