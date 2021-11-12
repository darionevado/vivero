import { useContext } from "react";
import { UserAuthContext } from "../../context/UserAuthContext";

export const UserAuthenticate = () => {


    const {setIsAuthenticated} = useContext(UserAuthContext);

    const handlesubmit = () => {
        setIsAuthenticated(true);
    }
    return (
    
    <>

        <div className="container">
            <h2>Debes Loguearte para ingresar</h2>
            <hr/>

            <div className="row">
                <button onClick={handlesubmit}> Ingresar </button>
            </div>
        </div>
    </>
    );
}