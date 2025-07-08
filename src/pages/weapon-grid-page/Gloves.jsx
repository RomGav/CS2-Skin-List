import {Link} from 'react-router';
import glovesImages from "../../components/jsImages/glovesImages";

const Gloves = () => {

  return (
    <>
    <div className="relative flex items-center justify-center h-10 mt-4">
      <button className="absolute left-6 bg-orange-300 text-black p-2 w-[4em] rounded hover:bg-orange-200 active:bg-yellow-400 border border-gray-400">
        <Link to = "/weapon">
          Back
        </Link>
      </button>
      <h1 className='text-4xl font-extrabold dark:text-white'>Gloves</h1>
    </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6">
        <Link to = {`/weapon/gloves/moto`}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
              <h3 className="text-lg text-center font-bold truncate mb-2">Moto Gloves</h3>
              <hr /><br />
                <img src= {glovesImages.moto} alt="Moto Gloves" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to = {`/weapon/gloves/driver`}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
              <h3 className="text-lg text-center font-bold truncate mb-2">Driver Gloves</h3>
              <hr /><br />
                <img src= {glovesImages.driver} alt="Driver Gloves" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to = {`/weapon/gloves/specialist`}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
              <h3 className="text-lg text-center font-bold truncate mb-2">Specialist Gloves</h3>
              <hr /><br />
                <img src= {glovesImages.specialist} alt="Specialist Gloves" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to = {`/weapon/gloves/sport`}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
              <h3 className="text-lg text-center font-bold truncate mb-2">Sport Gloves</h3>
              <hr /><br />
                <img src= {glovesImages.sport} alt="Sport Gloves" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to = {`/weapon/gloves/bloodhound`}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
              <h3 className="text-lg text-center font-bold truncate mb-2">Bloodhound Gloves</h3>
              <hr /><br />
                <img src= {glovesImages.bloodhound} alt="Bloodhound Gloves" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to = {`/weapon/gloves/hydra`}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
              <h3 className="text-lg text-center font-bold truncate mb-2">Hydra Gloves</h3>
              <hr /><br />
                <img src= {glovesImages.hydra} alt="Hydra Gloves" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to = {`/weapon/gloves/broken-fang`}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
              <h3 className="text-lg text-center font-bold truncate mb-2">Broken Fang Gloves</h3>
              <hr /><br />
                <img src= {glovesImages.brokenFang} alt="Broken Fang Gloves" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to = {`/weapon/gloves/hand-wraps`}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
              <h3 className="text-lg text-center font-bold truncate mb-2">Hand Wraps</h3>
              <hr /><br />
                <img src= {glovesImages.handWraps} alt="Hand Wraps" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
      </div>
    </>
  )
}

export default Gloves
