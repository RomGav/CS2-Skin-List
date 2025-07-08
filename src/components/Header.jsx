import { useContext } from 'react';
import {Link, useNavigate, useLocation} from 'react-router';
import SearchBar from './SearchBar';
import csLogo from "../icons/csLogo.png"
import { WeaponContext } from './WeaponContext';

const Header = () => {
  const {setSearchQuery} = useContext(WeaponContext);
  const navigate = useNavigate()
  const location = useLocation()

  const handleClear = () => {
    setSearchQuery("");
    navigate(location.pathname === "/weapon" ? "/" : "/weapon" );
  }
  return (
    <header className='flex justify-center'>
      <nav>
        <Link to = "/"><img src = {csLogo} className='w-[20em] p-4 m-auto' /></Link>
        <SearchBar />
        <button onClick={handleClear}className='bg-orange-300 p-2 text-black
                hover:bg-orange-200 active:bg-yellow-400  
                cursor-pointer rounded-lg block text-sm w-[70vw] border border-gray-400'>Weapon List</button>
      </nav>
    </header>
  )
}

export default Header
