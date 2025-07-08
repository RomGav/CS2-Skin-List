import {Link} from 'react-router';
import rifleImages from "../../components/jsImages/rifleImages";

const Rifles = () => {

  return (
    <>
    <div className="relative flex items-center justify-center h-10 mt-4">
      <button className="absolute left-6 bg-orange-300 text-black p-2 w-[4em] rounded hover:bg-orange-200 active:bg-yellow-400 border border-gray-400">
        <Link to = "/weapon">
          Back
        </Link>
      </button>
      <h1 className='text-4xl font-extrabold dark:text-white'>Rifles</h1>
    </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6">
      <Link to = {"/weapon/rifle/famas"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">FAMAS</h3>
                <hr /><br />
                <img src= {rifleImages.famas} alt="FAMAS" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to = {`/weapon/rifle/galil`}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Galil AR</h3>
                <hr /><br />
                <img src= {rifleImages.galil} alt="Galil AR" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/rifle/m4a4"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">M4A4</h3>
                <hr /><br />
                <img src={rifleImages.m4a4} alt="M4A4" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/rifle/m4a1s"}>  
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">M4A1-S</h3>
                <hr /><br />
                <img src={rifleImages.m4a1s} alt="M4A1-S" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/rifle/ak47"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">AK-47</h3>
                <hr /><br />
                <img src={rifleImages.ak47} alt="AK-47" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/rifle/aug"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">AUG</h3>
                <hr /><br />
                <img src={rifleImages.aug} alt="AUG" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/rifle/sg553"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">SG 553</h3>
                <hr /><br />
                <img src={rifleImages.sg553} alt="SG 552" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
      </div>
    </>
  )
}

export default Rifles
