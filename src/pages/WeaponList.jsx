import {Link} from 'react-router';
import defaultImages from '../components/jsImages/defaultImages';

const WeaponList = () => {
  return (
<>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6 object-contain">
        <Link to = {"/weapon/pistol"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Pistols</h3>
                <img src= {defaultImages.p2000} alt="P2000" className="w-full h-36 object-contain mb-2" />
            </div>
        </Link>
        <Link to ={"/weapon/smg"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">SMGs</h3>
                <img src={defaultImages.mp9} alt="MP9" className="w-full h-36 object-contain mb-2" />
            </div>
        </Link>
        <Link to ={"/weapon/shotgun"}>  
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Shotguns</h3>
                <img src={defaultImages.nova} alt="Nova" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/lmg"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">LMGs</h3>
                <img src={defaultImages.negev} alt="Negev" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/rifle"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Rifles</h3>
                <img src={defaultImages.m4a4} alt="M4A4" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/sniper"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Sniper Rifles</h3>
                <img src={defaultImages.awp} alt="AWP" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to = {`/weapon/knife`}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Knives</h3>
                <img src= {defaultImages.knives} alt="Default Knives" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/equipment"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Equipment</h3>
                <img src={defaultImages.zeus} alt="Zeus x27" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/gloves"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Gloves</h3>
                <img src={defaultImages.gloves} alt="Gloves" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
      </div>
    </>
  )
}

export default WeaponList
