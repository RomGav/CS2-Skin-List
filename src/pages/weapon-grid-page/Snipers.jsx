import {Link} from 'react-router';
import sniperImages from "../../components/jsImages/sniperImages";

const Snipers = () => {

  return (
    <>
    <div className="relative flex items-center justify-center h-10 mt-4">
      <button className="absolute left-6 bg-orange-300 text-black p-2 w-[4em] rounded hover:bg-orange-200 active:bg-yellow-400 border border-gray-400">
        <Link to = "/weapon">
          Back
        </Link>
      </button>
      <h1 className='text-4xl font-extrabold dark:text-white'>Sniper Rifles</h1>
    </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6">
        <Link to = {`/weapon/sniper/scout`}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
              <h3 className="text-lg text-center font-bold truncate mb-2">SSG 08</h3>
              <hr /><br />
                <img src= {sniperImages.scout} alt="SSG 08" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to = {"/weapon/sniper/awp"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
              <h3 className="text-lg text-center font-bold truncate mb-2">AWP</h3>
              <hr /><br />
                <img src= {sniperImages.awp} alt="AWP" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/sniper/scar20"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
              <h3 className="text-lg text-center font-bold truncate mb-2">SCAR-20</h3>
              <hr /><br />
                <img src={sniperImages.scar20} alt="SCAR-20" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/sniper/g3sg1"}>  
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
              <h3 className="text-lg text-center font-bold truncate mb-2">G3SG1</h3>
              <hr /><br />
                <img src={sniperImages.g3sg1} alt="G3SG1" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
      </div>
    </>
  )
}

export default Snipers
