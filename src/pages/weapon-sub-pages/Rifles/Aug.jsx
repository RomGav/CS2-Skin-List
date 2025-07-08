import { useContext } from "react";
import { WeaponContext } from "../../../components/WeaponContext";
import { Link } from "react-router";

const Aug = () => {
  const { weapons } = useContext(WeaponContext);

  const filteredGun = weapons.filter(weapon => weapon.weapon.name === "AUG");


  return (
    <>
      <div className="relative flex items-center justify-center h-10 mt-4">
        <button className="absolute left-6 bg-orange-300 text-black p-2 w-[4em] rounded hover:bg-orange-200 active:bg-yellow-400 border border-gray-400">
          <Link to = "/weapon/rifle">
            Back
          </Link>
        </button>
        <h1 className='text-4xl font-extrabold dark:text-white'>AUG Skins:</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6">
          {filteredGun.map(weapon => (
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
              <h3 className="text-lg text-center font-bold truncate mb-2">{weapon.name}</h3>
              <hr /><br />
              <img src={weapon.image} alt={weapon.name} className="w-full h-36 object-contain mb-2"/>
            </div>
          ))}
      </div>
    </>
  )
}

export default Aug
