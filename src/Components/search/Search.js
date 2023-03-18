import { AsyncPaginate } from 'react-select-async-paginate';
import { useState } from 'react';
import axios from 'axios';

const Search = ({ onSearchChange }) => {

  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {

    const geOptions = {
      method: 'GET',
      url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
      params: { minPopulation: '100000', namePrefix: `${inputValue}` },
      headers: {
        'X-RapidAPI-Key': 'bd2331da35msh74c2f770d6f9e00p1c8acajsn5e328e3a02f9',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
    };

    return axios.request(geOptions)
      .then(function (response) {
        return {
          options: response.data.data.map((item) => {
            return {
              label: `${item.name}, ${item.countryCode}`,
              value: `${item.latitude} ${item.longitude}`
            }
          })
        };
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const handleOnChange = (value) => {
    setSearch(value);
    onSearchChange(value);

  }

  return (
    <AsyncPaginate
      placeholder="Search"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  )
}

export default Search