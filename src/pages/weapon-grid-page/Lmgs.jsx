import {Link} from 'react-router';
import lmgImages from "../../components/jsImages/lmgImages";

const Lmgs = () => {

  return (
    <>
    <div className="relative flex items-center justify-center h-10 mt-4">
      <button className="absolute left-6 bg-orange-300 text-black p-2 w-[4em] rounded hover:bg-orange-200 active:bg-yellow-400 border border-gray-400">
        <Link to = "/weapon">
          Back
        </Link>
      </button>
      <h1 className='text-4xl font-extrabold dark:text-white'>LMGs</h1>
    </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6">
        <Link to = {`/weapon/lmg/m249`}>
          <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
            <h3 className="text-lg text-center font-bold truncate mb-2">M249</h3>
            <hr /><br />
                <img src= {lmgImages.m249} alt="M249" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to = {"/weapon/lmg/negev"}>
          <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
            <h3 className="text-lg text-center font-bold truncate mb-2">Negev</h3>
            <hr /><br />
                <img src= {lmgImages.negev} alt="Negev" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
      </div>
    </>
  )
}

export default Lmgs
