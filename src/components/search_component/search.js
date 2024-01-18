import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";


const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputData) => {
    try {
   
      const kosovoResponse = await fetch("/KosovaCities.json");
      const kosovoData = await kosovoResponse.json();
      const geoMapResponse = await fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputData}`, geoApiOptions);
      const otherCitiesData = await geoMapResponse.json();
      const allCities = [
        ...kosovoData.cities,
        ...otherCitiesData.data,
      ];
  
      const filteredCities = allCities.filter((city) =>
        city.city.toLowerCase().includes(inputData.toLowerCase())
      );
  
      return {
        options: filteredCities.map((city) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.city}, ${city.iso2 || ''}`,
        })),
      };
    } catch (error) {
      console.error("Error loading cities:", error);
      throw error;
    }
  };
  
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for location"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
