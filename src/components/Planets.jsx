import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Planets = () => {

const{store,dispatch} = useGlobalReducer()

  return (
    <div>
        <h1>Planets</h1>
        <div className= "d-flex d-row overflow-auto flex-nowrap">
            {store.planets.length > 0 ? store.planets.map((planet)=>(
                    <div className="card m-3" key={planet.uid} style={{ width: '18rem', flex: "0 0 auto" }}>
                    <img className="card-img-top" src="https://picsum.photos/id/37/400/300" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text">{planet.name}</p>
                        <a href="#" className="btn btn-primary">See More</a>
                    </div>
                    </div>

              )) :
                "no names found"}

      </div>
    </div>

  )
}