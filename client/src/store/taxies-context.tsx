import Taxi from "../models/taxi";
import React, { useState } from "react";

type TaxiesContextObj = {
  taxies: Taxi[],
  addTaxi: (taxies: Taxi[]) => void;
}

export const TaxiesContext = React.createContext<TaxiesContextObj>({
  taxies: [],
  addTaxi: () => {},
});

const TaxiesContextProvider: React.FC = (props) => {
  const [taxies, setTaxies] = useState<Taxi[]>([]);

  const addTaxiHandler = (taxies: Taxi[]) => {
    setTaxies((prev) =>  {return taxies} );
  };

  const contextValue: TaxiesContextObj = {
    taxies: taxies,
    addTaxi: addTaxiHandler,
  };

  return (
    <TaxiesContext.Provider value={contextValue}>
      {props.children}
    </TaxiesContext.Provider>
  );
};

export default TaxiesContextProvider;