import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const People = () => {

  const{store,dispatch} = useGlobalReducer()

  return (
		
	<div>
		<h1>People</h1>
				<div className="d-flex d-row overflow-auto flex-nowrap" >

					{store.people.length > 0 ? store.people.map((person,i)=>(


					
					<div className="card m-3" key={person.uid} style={{ width: '18rem', flex: "0 0 auto" }} >
					<img className="card-img-top" src="https://picsum.photos/id/227/400/300" alt="Card image cap"/>
					<div className="card-body">
						<h5 className="card-title"></h5>
						<p className="card-text"><b>Name:</b> {person.name}</p>
						<p className="card-text"><b>Height:</b> {person.height}</p>
						<p className="card-text"><b>Eye Color:</b> {person.eye_color}</p>
						<p className="card-text"><b>Skin Complexion:</b> {person.skin_color}</p>

					<div className="ml-auto">
						<Link to={"OneCharacter/"+ i}> 
							<button className="btn btn-primary">See More</button>
						</Link>

						 <i className= "fa-regular fa-heart p-3"

                            onClick={()=>{
							dispatch({type:"my_type", payload:person.name})
						}}>
                        </i>
					</div>
					</div>
					</div>
		)) :
		"no names found"}
		</div>

	</div>

)
}

{/* <Link to={"/single/YO"}>Link practice </Link> */}