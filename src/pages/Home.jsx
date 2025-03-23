import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { People } from "../components/People.jsx";
// import { Vehicles } from "../components/Vehicles.jsx";
// import { Planets } from "../components/Planets.jsx"


export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

  
  
  const getPeople= ()=> {
	  
	  fetch("https://www.swapi.tech/api/people/")
	  .then(res => res.json())
	  .then((data) => {
		  
		  dispatch({type:"set_people" ,payload: data.results});
		//   console.log(data.results)
	  })
	  .catch(err => console.error(err))
  }


  const getPlanets= ()=> {

	  fetch("https://www.swapi.tech/api/planets/")
	  .then(res => res.json())
	  .then((data) => {
		dispatch({type:"set_planets" ,payload: data.results});
		//   console.log(data.results)
	  })
	  .catch(err => console.error(err))

  }

  const getVehicles= ()=>{

	  fetch("https://www.swapi.tech/api/vehicles/")
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
		{/* // 	<Planets/>
		// 	<Vehicles/> */}
		</div>
	);
}