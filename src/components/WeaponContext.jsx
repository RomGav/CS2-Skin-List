import {createContext, useState, useEffect} from 'react';
import { fetchWeapons } from '../loaders/weaponsloader';

export const WeaponContext = createContext()

export const WeaponProvider = ({children}) => {
    const [weapons, setWeapons] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchWeapons()
        .then((data) => setWeapons(data))
        .catch((error) => console.error(error));
    }, []);
    
    const filteredGun = weapons.filter((weapon) =>
        weapon.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <WeaponContext.Provider value = {{weapons, searchQuery, setSearchQuery, filteredGun}}>
        {children}
    </WeaponContext.Provider>
  );
};
