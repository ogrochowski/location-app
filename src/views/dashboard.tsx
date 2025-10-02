import styles from "./dashboard.module.css";
import { LatestSearch } from "../components/latest-search/latest-search";
import { Map } from "../components/map/map";
import { InformationPanel } from "../components/information-panel/information-panel";
import { Search } from "../components/search/search";
import { useUserData } from "../hooks/use-user-data";
import { useState } from "react";
import { IpDataType } from "../types/ip-data-type";

export const Dashboard = () => {
  const { userData } = useUserData();
  const [searchedData, setSearchedData] = useState<any>({});
  const [searchedHistory, setSearchedHistory] = useState<IpDataType[]>([]);

  if (!userData) {
    return <div>Loading user data</div>;
  }

  if (!searchedData) {
    return <div>Loading searched data</div>;
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.searches}>
        <LatestSearch searchedHistory={searchedHistory} />
      </div>
      <div className={styles.userMap}>
        <Map
          latitude={userData.latitude}
          longitude={userData.longitude}
          title='Map with user location'
        />
      </div>
      <div className={styles.userInfo}>
        <InformationPanel
          data={userData}
          title='Information about user location'
        />
      </div>
      <div className={styles.searchBox}>
        <Search
          searchedHistory={searchedHistory}
          setSearchedData={setSearchedData}
          setSearchedHistory={setSearchedHistory}
        />
      </div>
      <div className={styles.lastMap}>
        <Map
          latitude={searchedData.latitude}
          longitude={searchedData.longitude}
          title='Map with last search'
        />
      </div>
      <div className={styles.lastInfo}>
        <InformationPanel
          data={searchedData}
          title='Information about last search'
        />
      </div>
    </div>
  );
};
