import {useContext} from 'react'
import { WeaponContext } from './WeaponContext'
import { useNavigate, useLocation } from 'react-router';

const SearchBar = () => {
  const {searchQuery, setSearchQuery} = useContext(WeaponContext);
  const navigate = useNavigate();
  const location = useLocation();  

  const handleChange = (e) => {
    const newQuery = e.target.value
    setSearchQuery(newQuery);
    if (location.pathname !== "/")  {
      navigate ("/");
    };
  };

  return (
    <div className='flex justify-center'>
      <input type="text" placeholder='🔎 Search for a skin' value = {searchQuery} onChange={handleChange}
      className="bg-gray-50 border border-gray-300 rounded-lg 
                text-sm text-gray-900 focus:ring-blue-500 
                focus:border-gray-400 w-[70vw] p-2 mb-4" />
    </div>
  )
}

export default SearchBar
