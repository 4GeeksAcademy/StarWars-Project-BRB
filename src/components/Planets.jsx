import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Planets = () => {

const{store,dispatch} = useGlobalReducer()

  return (
    <div>
        <h1>Planets</h1>
        <div className= "d-flex d-row overflow-auto flex-nowrap">
            {store.planets.length > 0 ? store.planets.map((planet,i)=>(
                    <div className="card m-3" key={planet.uid} style={{ width: '18rem', flex: "0 0 auto" }}>
                    <img className="card-img-top" src="https://picsum.photos/id/37/400/300" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text"><b>Name:</b>{planet.name}</p>
                        <p className="card-text"><b>Population:</b> {planet.population}</p>
						            <p className="card-text"><b>Climae:</b> {planet.climate}</p>
                        <p className="card-text"><b>Gravity:</b> {planet.gravity}</p>
                        <p className="card-text"><b>Surface Water:</b> {planet.surface_water}</p>
                        <div className="ml-auto">
                                    <Link to={"PlanetOne/"+ i}> 
                                      <button className="btn btn-primary">See More</button>
                                    </Link>
                                    <i className= "fa-regular fa-heart p-3"

                                      onClick={()=>{
                                        dispatch({type:"my_type", payload:planet.name})
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