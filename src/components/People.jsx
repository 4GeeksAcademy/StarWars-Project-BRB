import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const People = () => {

  const{store,dispatch} = useGlobalReducer()
  return(
	<div>
		{store.people.length > 0 ?
			store.people.map((person) => {
					return(
						<div>
							{person.name} 
							{/* bootstrap card included here */}
						</div>
					)
			}
	</div>
  )
}