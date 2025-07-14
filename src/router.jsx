import { createBrowserRouter } from "react-router";

//pages
import Home from "./Home";
import WeaponList from "./pages/WeaponList";
import NotFound from "./pages/NotFound";
import Pistols from "./pages/weapon-grid-page/Pistols";
import Usp_s from "./pages/weapon-sub-pages/Pistols/Usp_s";
import P2000 from "./pages/weapon-sub-pages/Pistols/P2000";
import Glock from "./pages/weapon-sub-pages/Pistols/Glock";
import Dualies from "./pages/weapon-sub-pages/Pistols/Dualies";
import P250 from "./pages/weapon-sub-pages/Pistols/P250";
import FiveSeveN from "./pages/weapon-sub-pages/Pistols/FiveSeveN";
import Tec9 from "./pages/weapon-sub-pages/Pistols/Tec9";
import Cz from "./pages/weapon-sub-pages/Pistols/Cz";
import Deagle from "./pages/weapon-sub-pages/Pistols/Deagle";
import Revo from "./pages/weapon-sub-pages/Pistols/Revo";
import Knives from "./pages/weapon-grid-page/Knives";
import Bayonet from "./pages/weapon-sub-pages/Knives/Bayonet";
import Bowie from "./pages/weapon-sub-pages/Knives/Bowie";
import Butterfly from "./pages/weapon-sub-pages/Knives/Butterfly";
import Falchion from "./pages/weapon-sub-pages/Knives/Falchion";
import Flip from "./pages/weapon-sub-pages/Knives/Flip";
import Gut from "./pages/weapon-sub-pages/Knives/Gut";
import Huntsman from "./pages/weapon-sub-pages/Knives/Huntsman";
import Karambit from "./pages/weapon-sub-pages/Knives/Karambit";
import Kukri from "./pages/weapon-sub-pages/Knives/Kukri";
import M9Bayo from "./pages/weapon-sub-pages/Knives/M9Bayo";
import Navaja from "./pages/weapon-sub-pages/Knives/Navaja";
import Nomad from "./pages/weapon-sub-pages/Knives/Nomad";
import Paracord from "./pages/weapon-sub-pages/Knives/Paracord";
import ShadowDaggers from "./pages/weapon-sub-pages/Knives/ShadowDaggers";
import Skeleton from "./pages/weapon-sub-pages/Knives/Skeleton";
import Stiletto from "./pages/weapon-sub-pages/Knives/Stiletto";
import Survival from "./pages/weapon-sub-pages/Knives/Survival";
import Talon from "./pages/weapon-sub-pages/Knives/Talon";
import Ursus from "./pages/weapon-sub-pages/Knives/Ursus";
import Smgs from "./pages/weapon-grid-page/Smgs";
import Mac10 from "./pages/weapon-sub-pages/SMGs/Mac10";
import Mp5 from "./pages/weapon-sub-pages/SMGs/Mp5";
import Mp7 from "./pages/weapon-sub-pages/SMGs/Mp7";
import Mp9 from "./pages/weapon-sub-pages/SMGs/Mp9";
import P90 from "./pages/weapon-sub-pages/SMGs/P90";
import PPBizon from "./pages/weapon-sub-pages/SMGs/PPBizon";
import Ump from "./pages/weapon-sub-pages/SMGs/Ump";
import Shotguns from "./pages/weapon-grid-page/Shotguns";
import Mag7 from "./pages/weapon-sub-pages/Shotguns/Mag7";
import Nova from "./pages/weapon-sub-pages/Shotguns/nova";
import SawedOff from "./pages/weapon-sub-pages/Shotguns/SawedOff";
import Xm1014 from "./pages/weapon-sub-pages/Shotguns/xm1014";
import Lmgs from "./pages/weapon-grid-page/Lmgs";
import M249 from "./pages/weapon-sub-pages/LMGs/M249";
import Negev from "./pages/weapon-sub-pages/LMGs/Negev";
import Snipers from "./pages/weapon-grid-page/Snipers";
import Scout from "./pages/weapon-sub-pages/Snipers/Scout";
import Awp from "./pages/weapon-sub-pages/Snipers/Awp";
import Scar20 from "./pages/weapon-sub-pages/Snipers/Scar20";
import G3sg1 from "./pages/weapon-sub-pages/Snipers/G3sg1";
import Rifles from "./pages/weapon-grid-page/Rifles";
import Famas from "./pages/weapon-sub-pages/Rifles/Famas";
import Galil from "./pages/weapon-sub-pages/Rifles/Galil";
import M4a4 from "./pages/weapon-sub-pages/Rifles/M4a4";
import M4a1s from "./pages/weapon-sub-pages/Rifles/M4a1s";
import Ak47 from "./pages/weapon-sub-pages/Rifles/Ak47";
import Aug from "./pages/weapon-sub-pages/Rifles/Aug";
import Sg553 from "./pages/weapon-sub-pages/Rifles/Sg553";
import Equipment from "./pages/weapon-grid-page/Equipment";
import Zeus from "./pages/weapon-sub-pages/Equipment/Zeus";
import Gloves from "./pages/weapon-grid-page/Gloves";
import HandWraps from "./pages/weapon-sub-pages/Gloves/HandWraps"
import Moto from "./pages/weapon-sub-pages/Gloves/Moto";
import Driver from "./pages/weapon-sub-pages/Gloves/Driver";
import Specialist from "./pages/weapon-sub-pages/Gloves/Specialist";
import Sport from "./pages/weapon-sub-pages/Gloves/Sport";
import Bloodhound from "./pages/weapon-sub-pages/Gloves/Bloodhound";
import Hydra from "./pages/weapon-sub-pages/Gloves/Hydra";
import BrokenFang from "./pages/weapon-sub-pages/Gloves/BrokenFang";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "weapon",
                element: <WeaponList />,
            },
            {
                path: "weapon/pistol",
                element: <Pistols />,
            },
            {
                path: "weapon/pistol/usp-s",
                element: <Usp_s />,
            },
            {
                path: "weapon/pistol/p2000",
                element: <P2000 />,
            },
            {
                path: "weapon/pistol/glock-18",
                element: <Glock />,
            },
            {
                path: "weapon/pistol/dual-berettas",
                element: <Dualies />,
            },
            {
                path: "weapon/pistol/p250",
                element: <P250 />,
            },
            {
                path: "weapon/pistol/five-seven",
                element: <FiveSeveN />,
            },
            {
                path: "weapon/pistol/tec-9",
                element: <Tec9 />,
            },
            {
                path: "weapon/pistol/cz75-auto",
                element: <Cz />,
            },
            {
                path: "weapon/pistol/desert-eagle",
                element: <Deagle />,
            },
            {
                path: "weapon/pistol/r8-revolver",
                element: <Revo />,
            },
            {
                path: "weapon/knife",
                element: <Knives />,
            },
            {
                path: "weapon/knife/bayonet",
                element: <Bayonet />,
            },
            {
                path: "weapon/knife/bowie",
                element: <Bowie />,
            },
            {
                path: "weapon/knife/butterfly",
                element: <Butterfly />,
            },
            {
                path: "weapon/knife/falchion",
                element: <Falchion />,
            },
            {
                path: "weapon/knife/flip",
                element: <Flip />,
            },
            {
                path: "weapon/knife/gut",
                element: <Gut />,
            },
            {
                path: "weapon/knife/huntsman",
                element: <Huntsman />,
            },
            {
                path: "weapon/knife/karambit",
                element: <Karambit />,
            },
            {
                path: "weapon/knife/kukri",
                element: <Kukri />,
            },
            {
                path: "weapon/knife/m9Bayo",
                element: <M9Bayo />,
            },
            {
                path: "weapon/knife/navaja",
                element: <Navaja />,
            },
            {
                path: "weapon/knife/nomad",
                element: <Nomad />,
            },            
            {
                path: "weapon/knife/paracord",
                element: <Paracord />,
            },            
            {
                path: "weapon/knife/shadowDaggers",
                element: <ShadowDaggers />,
            },
            {
                path: "weapon/knife/skeleton",
                element: <Skeleton />,
            },
            {
                path: "weapon/knife/stiletto",
                element: <Stiletto />,
            },
            {
                path: "weapon/knife/survival",
                element: <Survival />,
            },
            {
                path: "weapon/knife/talon",
                element: <Talon />,
            },
            {
                path: "weapon/knife/ursus",
                element: <Ursus />,
            },
            {
                path: "weapon/smg",
                element: <Smgs />,
            },
            {
                path: "weapon/smg/mac10",
                element: <Mac10 />,
            },
            {
                path: "weapon/smg/mp5",
                element: <Mp5 />,
            },
            {
                path: "weapon/smg/mp7",
                element: <Mp7 />,
            },
            {
                path: "weapon/smg/mp9",
                element: <Mp9 />,
            },
            {
                path: "weapon/smg/p90",
                element: <P90 />,
            },
            {
                path: "weapon/smg/ppbizon",
                element: <PPBizon />,
            },
            {
                path: "weapon/smg/ump",
                element: <Ump />,
            },
            {
                path: "weapon/shotgun",
                element: <Shotguns />,
            },
            {
                path: "weapon/shotgun/mag7",
                element: <Mag7 />,
            },
            {
                path: "weapon/shotgun/nova",
                element: <Nova />,
            },
            {
                path: "weapon/shotgun/sawedoff",
                element: <SawedOff />,
            },
            {
                path: "weapon/shotgun/xm1014",
                element: <Xm1014 />,
            },
            {
                path: "weapon/lmg",
                element: <Lmgs />,
            },
            {
                path: "weapon/lmg/m249",
                element: <M249 />,
            },
            {
                path: "weapon/lmg/negev",
                element: <Negev />,
            },
            {
                path: "weapon/sniper",
                element: <Snipers />,
            },
            {
                path: "weapon/sniper/scout",
                element: <Scout />,
            },
            {
                path: "weapon/sniper/awp",
                element: <Awp />,
            },
            {
                path: "weapon/sniper/scar20",
                element: <Scar20 />,
            },
            {
                path: "weapon/sniper/g3sg1",
                element: <G3sg1 />,
            },
            {
                path: "weapon/rifle",
                element: <Rifles />,
            },
            {
                path: "weapon/rifle/famas",
                element: <Famas />,
            },
            {
                path: "weapon/rifle/galil",
                element: <Galil />,
            },
            {
                path: "weapon/rifle/m4a4",
                element: <M4a4 />,
            },
            {
                path: "weapon/rifle/m4a1s",
                element: <M4a1s />,
            },
            {
                path: "weapon/rifle/ak47",
                element: <Ak47 />,
            },
            {
                path: "weapon/rifle/aug",
                element: <Aug />,
            },
            {
                path: "weapon/rifle/sg553",
                element: <Sg553 />,
            },
            {
                path: "weapon/equipment",
                element: <Equipment />,
            },
            {
                path: "weapon/equipment/zeus",
                element: <Zeus />,
            },
            {
                path: "weapon/gloves",
                element: <Gloves />,
            },
            {
                path: "weapon/gloves/moto",
                element: <Moto />,
            },
            {
                path: "weapon/gloves/driver",
                element: <Driver />,
            },
            {
                path: "weapon/gloves/specialist",
                element: <Specialist />,
            },
            {
                path: "weapon/gloves/sport",
                element: <Sport />,
            },
            {
                path: "weapon/gloves/bloodhound",
                element: <Bloodhound />,
            },
            {
                path: "weapon/gloves/hydra",
                element: <Hydra />,
            },
            {
                path: "weapon/gloves/broken-fang",
                element: <BrokenFang />,
            },
            {
                path: "weapon/gloves/hand-wraps",
                element: <HandWraps />,
            },

            {
                path: "*",
                element: <NotFound />,
            }
        ],
    },
]);

export default router
