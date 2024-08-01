import React, { useState } from 'react'
import PageContext from '../context/PageContext'

interface PageContextProviderProps{
    children: React.ReactNode
}


const PageContextProvider: React.FC<PageContextProviderProps> = ({ children }) => {
    const [page, setPage]= useState<number>(1);
    const [totalPageNumber, setTotalPageNumber] = useState<number>(0);
    const pageContextValue={
        page, setPage, totalPageNumber, setTotalPageNumber
    }

    return (
        <PageContext.Provider value={pageContextValue}>
            {children}
        </PageContext.Provider>
    );
}

export default PageContextProvider;
