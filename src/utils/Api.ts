import { useEffect, useState } from "react";
import { ChefDataProps } from "../components/ChefCards/types";

const useChef = () => {
  const [chefs, setChefs] = useState<ChefDataProps[]>([]);

  //fetch chef data on mount of ChefsDatabase component
  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/ef3f1e59-97f5-4dcf-8e97-e22160e2d587"
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
