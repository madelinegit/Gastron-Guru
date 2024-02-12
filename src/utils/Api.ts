import { useEffect, useState } from "react";
import { ChefDataProps } from "../components/ChefCards/types";

const useChef = () => {
  const [chefs, setChefs] = useState<ChefDataProps[]>([]);

  //fetch chef data on mount of ChefsDatabase component
  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/ecfc041c-1dc8-4575-900d-c0585effd77c"
        );
        const data = await response.json();
        setChefs(data.chefs);
        // console.log(chefs)
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchChefs();
  }, []);

  return chefs;
};

export default useChef;
