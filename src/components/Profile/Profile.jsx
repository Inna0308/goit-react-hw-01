import styles from "./Profile.module.css";

const Profile = (props) => {
  const { name, tag, location, image, stats } = props;

  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        <img className={styles.img} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.info}>@{tag}</p>
        <p className={styles.info}>{location}</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span>Followers</span>
          <span className={styles.number}>{stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span>Views</span>
          <span className={styles.number}>{stats.views}</span>
        </li>
        <li className={styles.item}>
          <span>Likes</span>
          <span className={styles.number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
