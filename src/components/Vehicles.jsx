import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Vehicles = () => {

  const{store,dispatch} = useGlobalReducer()
  return(
	<div>
		{store.vehicles.length > 0 ?
			store.vehicles.map((vehicle) => {
					return(
						<div>
							{vehicle.name} 
							{/* bootstrap card included here */}
						</div>
					)
			}
	</div>
  )
}