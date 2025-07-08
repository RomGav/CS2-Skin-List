import { useContext, useEffect } from "react";
import { WeaponContext } from "../components/WeaponContext"

const SearchResult = () => {
    const {filteredGun, searchQuery} = useContext(WeaponContext);

    if (!searchQuery) return null;

    return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Search Results for: <span className="text-indigo-500">{searchQuery}</span>
          </h2>
    
          {filteredGun.length === 0 ? (
            <p>No matching weapons or skins found.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredGun.map((weapon) => (
                <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                  <h3 className="text-lg text-center font-bold truncate mb-2">{weapon.name}</h3>
                  <hr />
                  <img src={weapon.image} alt={weapon.name} className="w-full h-36 object-contain mb-2"/>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    };
    
export default SearchResult;
