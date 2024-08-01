import React from "react";

export interface PageContextType {
    page: number;
    totalPageNumber: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    setTotalPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

const initialPageContext: PageContextType = {
    page: 2,
    totalPageNumber: 0,
    setPage: () => {},
    setTotalPageNumber: () => {},
};

const PageContext = React.createContext<PageContextType>(initialPageContext);

export default PageContext;