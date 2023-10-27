import axios from "axios";
import React, { useState } from "react";

interface IDownsizedImagesProps {
  height: string;
  size: string;
  url: string;
  width: string;
}

interface ISearchFormProps {
  setSearchResults: (data: IDownsizedImagesProps[]) => void;
}

function SearchForm({ setSearchResults }: ISearchFormProps) {
  const api_KEY = "pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa";
  const [searchQuery, setSearchQuery] = useState<string>("");

  const SearchGifs = async () => {
    try {
      if (searchQuery !== "") {
        const response = await axios.get(
          `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=${api_KEY}`
        );
        const downsizedImages: IDownsizedImagesProps[] = response.data.data.map(
          (item: any) => item.images.downsized
        );
        setSearchResults(downsizedImages);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    SearchGifs();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Search a gif"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
