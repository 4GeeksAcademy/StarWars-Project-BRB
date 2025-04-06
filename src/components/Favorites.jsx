import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state


// Define and export the Single component which displays individual item details.
export const Favorites = () => {

  const { store,dispatch } = useGlobalReducer()

  return (
    <div className="dropdown">
    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Favorites
    </button>
    <ul className="dropdown-menu">
      {store.favorite.map((item)=>{
        return(
          <li><a className="dropdown-item" href="#">{item}</a></li>
        )
      })}

    </ul>
  </div>
  );
};