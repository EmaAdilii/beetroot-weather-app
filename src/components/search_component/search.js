import { useState } from "react"
import {AsyncPaginate} from "react-select-async-paginate"
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search =({onSearchChange}) =>{
    const [search, setSearch] = useState(null);
    const loadOptions =(inputData) =>{
        

	return  fetch(
       `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputData}` , geoApiOptions)
	.then(response => response.json()) 
	.then(response=>console.log(response))
    .catch((err) => console.log(err));

    }
    const handleOnChange = (searchData) =>{
        setSearch(searchData);
        onSearchChange(searchData);
    }
    return(
        <AsyncPaginate
        placeholder ="Search for location"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}

        />
    )
}
export default Search;