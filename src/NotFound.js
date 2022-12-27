import { Link } from "react-router-dom";

const notFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry the page Cannot be found</h2><br/><br/>
            <Link to="/" className="all-button">Back To Homepage...</Link>
        </div>
     );
}
 
export default notFound;