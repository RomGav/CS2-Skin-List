import {Link} from 'react-router';
import shotgunImages from "../../components/jsImages/shotgunImages";

const Shotguns = () => {

  return (
    <>
    <div className="relative flex items-center justify-center h-10 mt-4">
      <button className="absolute left-6 bg-orange-300 text-black p-2 w-[4em] rounded hover:bg-orange-200 active:bg-yellow-400 border border-gray-400">
        <Link to = "/weapon">
          Back
        </Link>
      </button>
      <h1 className='text-4xl font-extrabold dark:text-white'>Shotguns</h1>
    </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6">
        <Link to = {`/weapon/shotgun/mag7`}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
              <h3 className="text-lg text-center font-bold truncate mb-2">MAG-7</h3>
              <hr /><br />
              <img src= {shotgunImages.mag7} alt="MAG-7" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to = {"/weapon/shotgun/nova"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
              <h3 className="text-lg text-center font-bold truncate mb-2">Nova</h3>
              <hr /><br />
              <img src= {shotgunImages.nova} alt="Nova" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/shotgun/sawedoff"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
              <h3 className="text-lg text-center font-bold truncate mb-2">Sawed-Off</h3>
              <hr /><br />
              <img src={shotgunImages.sawedoff} alt="Sawed-Off" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/shotgun/xm1014"}>  
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
              <h3 className="text-lg text-center font-bold truncate mb-2">XM1014</h3>
              <hr /><br />
              <img src={shotgunImages.xm1014} alt="XM1014" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
      </div>
    </>
  )
}

export default Shotguns
