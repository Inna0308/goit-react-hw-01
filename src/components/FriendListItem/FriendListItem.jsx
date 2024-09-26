import styles from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = (props) => {
  const { avatar, name, isOnline } = props;

  return (
    <div className={styles.card}>
      <img className={styles.img} src={avatar} alt={name} width="76" />
      <p className={styles.name}>{name}</p>
      <p className={clsx(styles.status, isOnline ? styles.online : styles.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
