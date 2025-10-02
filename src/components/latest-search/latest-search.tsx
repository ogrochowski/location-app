import styles from "./latest-search.module.css";
import { IpDataType } from "../../types/ip-data-type";

export const LatestSearch = ({
  searchedHistory,
}: {
  searchedHistory: IpDataType[];
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>List of all searches</div>
      <div className={styles.list}>
        {searchedHistory.map((item) => (
          <div key={item.ip} className={styles.item}>
            {item.ip}
          </div>
        ))}
      </div>
    </div>
  );
};
