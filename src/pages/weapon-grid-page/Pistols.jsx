import {Link} from 'react-router';
import pistolImages from "../../components/jsImages/pistolImages";

const Pistols = () => {

  return (
    <>
    <div className="relative flex items-center justify-center h-10 mt-4">
      <button className="absolute left-6 bg-orange-300 text-black p-2 w-[4em] rounded hover:bg-orange-200 active:bg-yellow-400 border border-gray-400">
        <Link to = "/weapon">
          Back
        </Link>
      </button>
      <h1 className='text-4xl font-extrabold dark:text-white'>Pistols</h1>
    </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6">
        <Link to = {`/weapon/pistol/usp-s`}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">USP-S</h3>
                <hr /><br />
                <img src= {pistolImages.usps} alt="USP-S" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to = {"/weapon/pistol/p2000"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">P2000</h3>
                <hr /><br />
                <img src= {pistolImages.p2000} alt="P2000" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/pistol/glock-18"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Glock-18</h3>
                <hr /><br />
                <img src={pistolImages.glock18} alt="Glock-18" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/pistol/dual-berettas"}>  
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Dual Berettas</h3>
                <hr /><br />
                <img src={pistolImages.dualberettas} alt="Dual Berettas" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/pistol/p250"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">P250</h3>
                <hr /><br />
                <img src={pistolImages.p250} alt="P250" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/pistol/five-seven"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Five-SeveN</h3>
                <hr /><br />
                <img src={pistolImages.fiveseven} alt="Five-SeveN" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/pistol/tec-9"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Tec-9</h3>
                <hr /><br />
                <img src={pistolImages.tec9} alt="Tec-9" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/pistol/cz75-auto"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">CZ75-Auto</h3>
                <hr /><br />
                <img src={pistolImages.cz75_auto} alt="CZ75-Auto" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/pistol/desert-eagle"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Desert Eagle</h3>
                <hr /><br />
                <img src= {pistolImages.deserteagle} alt="Desert Eagle" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/pistol/r8-revolver"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">R8 Revolver</h3>
                <hr /><br />
                <img src={pistolImages.r8revolver} alt="R8 Revolver" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
      </div>
    </>
  )
}

export default Pistols
