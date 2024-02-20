import { useEffect, useState } from "react";
import { ChefDataProps } from "../components/ChefCards/types";

const useChef = () => {
  const [chefs, setChefs] = useState<ChefDataProps[]>([]);

  //fetch chef data on mount of ChefsDatabase component
  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/3ec882fc-be6e-44fb-aac8-0ef9524f1b36"
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
