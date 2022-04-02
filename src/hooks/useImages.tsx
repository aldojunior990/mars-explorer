import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "../services/api";

interface SearchProps {
  earth_date: string;
}

interface ImageProps {
  id: number;
  img_src: string;
  rover: {
    name: string;
  };
  earth_date: string;
}

interface GetProps {
  photos: ImageProps[];
}

interface ImageContextData {
  images: ImageProps[];
  imagesCuriosity: ImageProps[];
  imagesSpirit: ImageProps[];
  imagesOpportunity: ImageProps[];

  setSearch: (value: SearchProps) => void;
  search: SearchProps;
}

interface ImageProviderProps {
  children: ReactNode;
}

export const ImageContext = createContext<ImageContextData>(
  {} as ImageContextData
);

export function ImageProvider({ children }: ImageProviderProps) {
  const [search, setSearch] = useState<SearchProps>({
    earth_date: "2015-6-3",
  });

  const [imagesOpportunity, setImagesOpportunity] = useState<ImageProps[]>([]);
  const [imagesCuriosity, setImagesCuriosity] = useState<ImageProps[]>([]);
  const [imagesSpirit, setImagesSpirit] = useState<ImageProps[]>([]);

  useEffect(() => {
    api
      .get<GetProps>(
        `Curiosity/photos?earth_date=${search.earth_date}&api_key=icP0cCqSybcLhGaw9s0kz7BALeaCF2kW7P1p7cdQ`
      )
      .then((Response) => setImagesCuriosity(Response.data.photos))
      .catch((err) => {
        console.log("ops! ocorreu um erro");
      });

    api
      .get<GetProps>(
        `Opportunity/photos?earth_date=${search.earth_date}&api_key=icP0cCqSybcLhGaw9s0kz7BALeaCF2kW7P1p7cdQ`
      )
      .then((Response) => setImagesOpportunity(Response.data.photos))
      .catch((err) => {
        console.log("ops! ocorreu um erro");
      });

    api
      .get<GetProps>(
        `Spirit/photos?earth_date=${search.earth_date}&api_key=icP0cCqSybcLhGaw9s0kz7BALeaCF2kW7P1p7cdQ`
      )
      .then((Response) => setImagesSpirit(Response.data.photos))
      .catch((err) => {
        console.log("ops! ocorreu um erro");
      });
  }, [search]);

  const images = imagesCuriosity.concat(imagesOpportunity, imagesSpirit);

  return (
    <ImageContext.Provider
      value={{
        images,
        setSearch,
        imagesSpirit,
        imagesOpportunity,
        imagesCuriosity,
        search,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}

export function useImage() {
  const context = useContext(ImageContext);
  return context;
}
