import styles from "./search.module.css";
import { useState } from "react";
import { getHostName, isIP } from "./utils";
import { useSearchIp } from "../../hooks/use-search-ip";
import { useSearchDomain } from "../../hooks/use-search-domain";
import { IpDataType } from "../../types/ip-data-type";

export const Search = ({
  searchedHistory,
  setSearchedData,
  setSearchedHistory,
}: {
  searchedHistory: IpDataType[];
  setSearchedData: (data: IpDataType) => void;
  setSearchedHistory: (history: IpDataType[]) => void;
}) => {
  const [search, setSearch] = useState<string>("");
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.trim());
  };
  const { triggerGetIp } = useSearchIp();
  const { triggerGetDomain } = useSearchDomain();

  const handleSearchClick = async () => {
    if (isIP(search)) {
      const fetchedIpData = await triggerGetIp(search);
      if (fetchedIpData) {
        setSearchedData(fetchedIpData);
        setSearchedHistory([...searchedHistory, fetchedIpData]);
      }
    } else {
      const fetchedDomainIp = await triggerGetDomain(getHostName(search));
      if (fetchedDomainIp) {
        const fetchedIpData = await triggerGetIp(fetchedDomainIp);
        if (fetchedIpData) {
          setSearchedData(fetchedIpData);
          setSearchedHistory([...searchedHistory, fetchedIpData]);
        }
      }
    }

    setSearch("");
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type='text'
        placeholder='Search'
        onChange={(e) => onInputChange(e)}
        value={search}
      />
      <button
        disabled={!search.length}
        onClick={handleSearchClick}
        className={styles.button}
      >
        Search
      </button>
    </div>
  );
};
