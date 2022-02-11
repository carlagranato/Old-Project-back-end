import { FunctionComponent } from "react";
import PageHeader from "../components/Header"
import PageFooter from "../components/Footer";


const PageHF : FunctionComponent = ({ children }) => {
    return (
        <>
        <PageHeader/>
        <main> 
            { children }
        </main>
        <PageFooter/>
        </>
 
    )
}
export default PageHF;