import {Link} from 'react-router';
import equipmentImages from "../../components/jsImages/equipmentImages";

const Equipment = () => {

  return (
    <>
    <div className="relative flex items-center justify-center h-10 mt-4">
      <button className="absolute left-6 bg-orange-300 text-black p-2 w-[4em] rounded hover:bg-orange-200 active:bg-yellow-400 border border-gray-400">
        <Link to = "/weapon">
          Back
        </Link>
      </button>
      <h1 className='text-4xl font-extrabold dark:text-white'>Equipment</h1>
    </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6">
        <Link to = {`/weapon/equipment/zeus`}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
              <h3 className="text-lg text-center font-bold truncate mb-2">Zeus x27</h3>
              <hr /><br />
                <img src= {equipmentImages.zeus} alt="Zeus x27" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
      </div>
    </>
  )
}

export default Equipment
