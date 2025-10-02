import styles from "./information-panel.module.css";
import { IpDataType } from "../../types/ip-data-type";

export const InformationPanel = ({
  data,
  title,
}: {
  data?: IpDataType;
  title: string;
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        <div>ip: {data?.ip}</div>
        <div>asn: {data?.asn}</div>
        <div>asn_org: {data?.asn_org}</div>
        <div>city: {data?.city}</div>
        <div>country: {data?.country}</div>
        <div>country_iso: {data?.country_iso}</div>
      </div>
    </div>
  );
};
