import { Key, useState } from "react";
import SearchForm from "../../components/SearchForm";

function MainPage() {
  const [searchResults, setSearchResults] = useState<any>();
  return (
    <>
      <SearchForm setSearchResults={setSearchResults} />

      {searchResults?.map((img: { url: string }, index: Key) => {
        return (
          <div key={index}>
            <img src={img.url} />
          </div>
        );
      })}
    </>
  );
}

export default MainPage;
