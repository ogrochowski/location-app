import { useState } from "react";

export const useSearchIp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getIpData = async (ip: string) => {
    try {
      const res = await fetch(`https://ifconfig.co/json?ip=${ip}`, {
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

  const triggerGetIp = async (ip: string) => {
    setIsLoading(true);
    const response = await getIpData(ip);
    setIsLoading(false);
    if (response) {
      return {
        ip: response.ip,
        asn: response.asn,
        asn_org: response.asn_org,
        city: response.city,
        country: response.country,
        country_iso: response.country_iso,
        latitude: response.latitude,
        longitude: response.longitude,
      };
    }
  };

  return { isLoading, triggerGetIp };
};
