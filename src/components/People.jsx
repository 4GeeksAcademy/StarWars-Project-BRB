import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const People = () => {

  const{store,dispatch} = useGlobalReducer()

  return (
	<div>
		{store.people.length > 0 ? store.people.map(()=>{
				<div>
					<div class="card" style="width: 18rem;">
					<img class="card-img-top" src="..." alt="Card image cap"/>
					<div class="card-body">
						<h5 class="card-title"></h5>
						<p class="card-text">{people.name}</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
					</div>
				</div>

		}) :
		"no names found"}

	</div>

  )
}