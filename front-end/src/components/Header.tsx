import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

const PageHeader : FunctionComponent = () => {
    return (
        <div>
        <NavLink to="/PageHome">Home</NavLink>
        <NavLink to="/PaginaProdutos">PaginaProdutos</NavLink>    
        </div>
        
    )
}


    

export default PageHeader




