// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams} from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import rigoImageUrl from "../assets/img/rigo-baby.jpg"  // Import an image asset
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state

// Define and export the Single component which displays individual item details.
export const VehicleOne = props => {

  const { store } = useGlobalReducer()
  const { word } = useParams()
  console.log("variable:",word)
  const vehicleArray = store.vehicles
  const vehicle = vehicleArray[word]

  return (
    <div className="container text-center">
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          <h1>{vehicle?.name} Page</h1>
        </span>
      </Link>
          <p> {vehicle?.name} profile </p>
    </div>
  );
};





// // Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
// Single.propTypes = {
//   // Although 'match' prop is defined here, it is not used in the component.
//   // Consider removing or using it as needed.
//   match: PropTypes.object
// };
