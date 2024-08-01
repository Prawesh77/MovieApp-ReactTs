import { useContext } from "react";
import PageContext, { PageContextType } from "../context/PageContext";

function usePage(): PageContextType{
    return useContext(PageContext)
}

export default usePage;