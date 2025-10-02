import { useEffect, useState } from "react";
import { IpDataType } from "../types/ip-data-type";

export const useUserData = () => {
  const [userData, setUserData] = useState<IpDataType>({
    ip: "",
    asn: "",
    asn_org: "",
    city: "",
    country: "",
    country_iso: "",
    latitude: undefined,
    longitude: undefined,
  });

  const getMyIpData = async () => {
    try {
      const res = await fetch("https://ifconfig.co/json", {
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      return data;
    } catch (e) {
      console.error("ifconfig.co error:", e);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMyIpData();
      if (response) {
        setUserData({
          ip: response.ip,
          asn: response.asn,
          asn_org: response.asn_org,
          city: response.city,
          country: response.country,
          country_iso: response.country_iso,
          latitude: response.latitude,
          longitude: response.longitude,
        });
      }
    };
    fetchData();
  }, []);

  return { userData };
};
