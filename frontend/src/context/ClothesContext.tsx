'use client';

import axios from 'axios';
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';

type Clothes = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
};

type ClothesContextProps = {
  setValues: Dispatch<SetStateAction<string>>;
  values: string;
  clothes: string[];
  addClothes: (item: string) => void;
  clothesData: Clothes[];
};

export const ClothesContext = createContext<ClothesContextProps | null>(null);

type ClothesProviderProps = {
  children: ReactNode;
};

const ClothesContextProvider = ({ children }: ClothesProviderProps) => {
  const [clothes, setClothes] = useState<string[]>([]);
  const [values, setValues] = useState<string>('');
  const [clothesData, setClothesData] = useState<Clothes[]>([]);

  const getFood = async () => {
    try {
      const response = await axios.get(
        'https://api.escuelajs.co/api/v1/products'
      );
      return setClothesData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFood();
  }, []);

  const addClothes = (item: string) => {
    setClothes((prev) => [...prev, item]);
  };

  const ContextValues: ClothesContextProps = {
    clothes,
    addClothes,
    values,
    setValues,
    clothesData,
  };

  return (
    <ClothesContext.Provider value={ContextValues}>
      {children}
    </ClothesContext.Provider>
  );
};

export const useClothesContext = () => {
  const context = useContext(ClothesContext);
  if (context === null) {
    throw new Error(
      'useClothesContext must be used within a ClothesContextProvider'
    );
  }
  return context;
};

export default ClothesContextProvider;
