import {Link} from 'react-router';
import knivesImages from "../../components/jsImages/knivesImages";

const Knives = () => {

  return (
    <>
    <div className="relative flex items-center justify-center h-10 mt-4">
      <button className="absolute left-6 bg-orange-300 text-black p-2 w-[4em] rounded hover:bg-orange-200 active:bg-yellow-400 border border-gray-400">
        <Link to = "/weapon">
          Back
        </Link>
      </button>
      <h1 className='text-4xl font-extrabold dark:text-white'>Knives</h1>
    </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6">
        <Link to = {`/weapon/knife/bayonet`}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Bayonet</h3>
                <hr /><br />
                <img src= {knivesImages.bayonet} alt="Bayonet" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to = {"/weapon/knife/bowie"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Bowie Knife</h3>
                <hr /><br />
                <img src= {knivesImages.bowie} alt="Bowie Knife" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/knife/butterfly"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Butterfly Knife</h3>
                <hr /><br />
                <img src={knivesImages.butterfly} alt="Butterfly Knife" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/knife/falchion"}>  
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Falchion Knife</h3>
                <hr /><br />
                <img src={knivesImages.falchion} alt="Falchion Knife" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/knife/gut"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Gut Knife</h3>
                <hr /><br />
                <img src={knivesImages.gut} alt="Gut Knife" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/knife/huntsman"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Huntsman Knife</h3>
                <hr /><br />
                <img src={knivesImages.huntsman} alt="Huntsman Knife" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/knife/karambit"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Karambit</h3>
                <hr /><br />
                <img src={knivesImages.karambit} alt="Karambit" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/knife/kukri"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Kukri Knife</h3>
                <hr /><br />
                <img src={knivesImages.kukri} alt="Kukri Knife" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/knife/m9Bayo"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">M9 Bayonet</h3>
                <hr /><br />
                <img src= {knivesImages.m9Bayo} alt="M9 Bayonet" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/knife/navaja"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Navaja Knife</h3>
                <hr /><br />
                <img src={knivesImages.navaja} alt="Navaja Knife" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/knife/nomad"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Nomad Knife</h3>
                <hr /><br />
                <img src={knivesImages.nomad} alt="Nomad Knife" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/knife/paracord"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Paracord Knife</h3>
                <hr /><br />
                <img src={knivesImages.paracord} alt="Paracord Knife" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/knife/shadowDaggers"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Shadow Daggers</h3>
                <hr /><br />
                <img src={knivesImages.shadowDaggers} alt="Shadow Daggers" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/knife/skeleton"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Skeleton Knife</h3>
                <hr /><br />
                <img src={knivesImages.skeleton} alt="Skeleton Knife" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/knife/stiletto"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Stiletto Knife</h3>
                <hr /><br />
                <img src={knivesImages.stiletto} alt="Stiletto Knife" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/knife/survival"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Survival Knife</h3>
                <hr /><br />
                <img src={knivesImages.survival} alt="Survival Knife" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/knife/talon"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Talon Knife</h3>
                <hr /><br />
                <img src={knivesImages.talon} alt="Talon Knife" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>
        <Link to ={"/weapon/knife/ursus"}>
            <div className="border rounded-lg shadow hover:shadow-md transition duration-200 p-4 bg-white">
                <h3 className="text-lg text-center font-bold truncate mb-2">Ursus Knife</h3>
                <hr /><br />
                <img src={knivesImages.ursus} alt="Ursus Knife" className='w-full h-36 object-contain mb-2' />
            </div>
        </Link>

      </div>
    </>
  )
}

export default Knives
