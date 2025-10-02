import { useState } from "react";

export const useSearchDomain = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getSearchedData = async (domain: string) => {
    const res = await fetch(`https://dns.google/resolve?name=${domain}&type=A`);
    const data = await res.json();
    return data;
  };

  const triggerGetDomain = async (domain: string) => {
    setIsLoading(true);
    const response = await getSearchedData(domain);
    setIsLoading(false);
    if (response && response.Answer) {
      return response.Answer[0].data;
    } else {
      alert("Data not found");
    }
  };

  return { isLoading, triggerGetDomain };
};
