import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { People } from "../components/People.jsx";
import { Vehicles } from "../components/Vehicles.jsx";
import { Planets } from "../components/Planets.jsx"


export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

  
  
  const getPeople= ()=> {
	  
	  fetch("https://swapi.dev/api/people/")
	  .then(res => res.json())
	  .then((data) => {
		
		  dispatch({type:"set_people" ,payload: data.results});
		  console.log("getpeople:", data.results)
	  })
	  .catch(err => console.error(err))
  }


  const getPlanets= ()=> {

	  fetch("https://swapi.dev/api/planets/")
	  .then(res => res.json())
	  .then((data) => {
		dispatch({type:"set_planets" ,payload: data.results});
		//   console.log(data.results)
	  })
	  .catch(err => console.error(err))

  }

  const getVehicles= ()=>{

	  fetch("https://swapi.dev/api/vehicles/")
	  .then(res => res.json())
	  .then((data) => {
		dispatch({type:"set_vehicles" ,payload: data.results});
		//   console.log(data.results)
	  })
	  .catch(err => console.error(err))
	}

	console.log(store)



  useEffect(()=>{
	getPeople();
	getVehicles();
	getPlanets();
  },[])


	return (
		<div className="text-center mt-5">
			<People/>
			<Planets/>
			<Vehicles/>
			<Link to= />
			<button> see more</button>
			</Link>
		</div>
	);
}


// 1) try to have 3 components: <People />, <Vehicles />, <Planets /> call them all on home.jsx
// 2) loop/map through  corresponding arrays and render the names.
// 3) in each component have an <h1>People </h1> that matched the component

// always have console open or network tab and try them both