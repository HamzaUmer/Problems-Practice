// DataContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [addOnData, setAddOnData] = useState([])
  const [country, setCountry] = useState()
  const [promo, setPromo] = useState([])
  const [storePromo, setStorePromo] = useState([])
  const saveData = (newData) => {
    setData(newData);
  };
  const saveAddOnData = (newData) => {
    // Check if prevData is an array before using the spread operator
    setAddOnData((prevData) => {
      if (Array.isArray(prevData)) {
        return [...prevData, newData]; // Merge the new data with the existing addOnData array
      } else {
        return [newData]; // If prevData is not an array, create a new array with newData
      }
    });
  };
  const removeAddOnData = (itemName) => {
    setAddOnData((prevData) => {
      // Filter out the specific item from addOnData array
      const updatedAddOnData = prevData.filter((item) => item.adOnsName !== itemName);
      return updatedAddOnData;
    });
  };
  const removeAll = ()=> {
    setAddOnData([])
  }

  const saveCountryData = (countryName) => {
    setCountry(countryName);
  };
  const savePromoData = (newData) => {
    setPromo(newData);
  };
  return (
    <DataContext.Provider 
    value=
    {{ data, 
       saveData, 
       addOnData, 
       saveAddOnData, 
       removeAddOnData,
       removeAll, 
       setAddOnData, 
       country, 
       saveCountryData,
       promo,
       savePromoData,
       storePromo,
       setStorePromo
        }}>
      {children}
    </DataContext.Provider>
  );
};


//Select Data context
export const SelectDataContext = createContext();
export const SelectDataProvider = ({ children }) => {
  const [selectData, setSelectData] = useState([]);
  const [isRemoveButton, setIsRemoveButton] = useState(false); // State to control button text
  const saveSelectData = (newSelectData) => {
    setSelectData(newSelectData);
    setIsRemoveButton(true); // Enable the "Remove" button
  };
  const removeData = () => {
    setSelectData([]); // Clearing the data
    setIsRemoveButton(false); // Disable the "Remove" button
  };
  return (
    <SelectDataContext.Provider value={{ selectData, saveSelectData, removeData,  isRemoveButton }}>
      {children}
    </SelectDataContext.Provider>
    )
};

//Increment and Decrement Counter context
export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [counters, setCounters] = useState({});

  const incrementCounter = (itemName) => {
    setCounters((prevCounters) => {
      const updatedCounters = { ...prevCounters };
      updatedCounters[itemName] = (updatedCounters[itemName] || 0) + 1;
      return updatedCounters;
    });
  };

  const decrementCounter = (itemName) => {
    setCounters((prevCounters) => {
      const updatedCounters = { ...prevCounters };
      if (updatedCounters[itemName] > 0) {
        updatedCounters[itemName] = (updatedCounters[itemName] || 0) - 1;
      }
      return updatedCounters;
    });
  };
  const resetCounter = (itemName) => {
    setCounters((prevCounters) => {
      const updatedCounters = { ...prevCounters };
      updatedCounters[itemName] = 0; // Reset the counter to 0
      return updatedCounters;
    });
  };
  return (
    <CounterContext.Provider value={{ counters, incrementCounter, decrementCounter,setCounters, resetCounter }}>
      {children}
    </CounterContext.Provider>
  );
};


// Price Calculation Context API
export const PriceContext = createContext();
export const PriceProvider = ({ children }) => {
  const { selectData } = useContext(SelectDataContext);
  const { addOnData, storePromo } = useContext(DataContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [promoAmount, setPromoAmount] = useState(0)
  useEffect(() => {
    let calculatedPrice = 0;
    let totalDiscount = 0;
    let promoDiscountAmount = 0
    // Calculate total price from selectData considering discounts
    selectData.forEach((item) => {
      const discount = item.offPercentage || 0;
      const price = item.price || 0;
      const priceAfterDiscount = price * (1 - discount / 100);
      calculatedPrice += priceAfterDiscount;
      totalDiscount += price - priceAfterDiscount; // Calculating total discount
    });

    // Calculate total price from addOnData considering count (excluding discounts)
    addOnData.forEach((item) => {
      const count = item.count || 1; // If count is missing, default to 1
      calculatedPrice += (item.adOnsPrice || 0) * count;
    });

    // Check if storePromo exists and has promoCodePercentage
  if (storePromo && storePromo.promoCodePercentage) {
    const promoDiscount = (calculatedPrice * storePromo.promoCodePercentage) / 100;
    promoDiscountAmount += promoDiscount
    calculatedPrice -= promoDiscount; // Deduct promo discount from the total price
  }

  setTotalPrice(calculatedPrice);
  setDiscountAmount(totalDiscount);
  setPromoAmount(promoDiscountAmount)
}, [selectData, addOnData, storePromo]);
  return (
    <PriceContext.Provider value={{ totalPrice, discountAmount, setDiscountAmount, promoAmount}}>
      {children}
    </PriceContext.Provider>
  );
};