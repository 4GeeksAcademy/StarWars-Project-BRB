import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Vehicles = () => {


const{store,dispatch} = useGlobalReducer()

  return (
    <div>
        <h1>Vehicles</h1>
        {store.vehicles.length > 0 ? store.vehicles.map((vehicle)=>(
                <div key={vehicle.uid}>
                    <div className="card m-3" style={{ width: '18rem' }}>
                    <img className="card-img-top" src="https://picsum.photos/id/274/400/300" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text">{vehicle.name}</p>
                        <a href="#" className="btn btn-primary">See More</a>
                    </div>
                    </div>
                </div>

        )) :
        "no names found"}

    </div>

  )
}