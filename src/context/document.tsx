import React, { createContext, useState, useContext, ReactNode } from 'react';

interface IAppState {
    search: string;
    filters: string[];
    selectedDocs: string[]
};


interface IAppContextProps {
    state: IAppState;
    updateSearch: (searchvalue: string) => void;
    updateFilters: (filtervalue: string) => void;
    updateSelectedDocs: (selectedDocsValue: string) => void;
    removeFilter: (filtervalue: string) => void;
    removeSelectedDocs: (selectedDocsValue: string) => void;
}

const AppContext = createContext<IAppContextProps | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const DocumentContextProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [appState, setAppState] = useState<IAppState>({
        search: '',
        filters: [],
        selectedDocs: []
    });


    const contextValue: IAppContextProps = {
        state: appState,
        updateSearch: (searcvalue: string) => setAppState((prevState) => ({ ...(prevState ?? {}), search: searcvalue })),
        updateFilters: (filtervalue: string) => setAppState((prevState) => ({ ...(prevState ?? {}), filters: !prevState.filters.includes(filtervalue) ? [...prevState.filters, filtervalue] : prevState.filters })),
        updateSelectedDocs: (selectedDocsValue: string) => setAppState((prevState) => ({ ...(prevState ?? {}), selectedDocs: !prevState.selectedDocs.includes(selectedDocsValue) ? [...prevState.selectedDocs, selectedDocsValue] : prevState.filters })),
        removeFilter: (filtervalue: string) => setAppState((prevState) => ({ ...(prevState ?? {}), filters: prevState.filters.filter((prevFilter) => prevFilter !== filtervalue) })),
        removeSelectedDocs: (selectedDocsValue: string) => setAppState((prevState) => ({ ...(prevState ?? {}), selectedDocs: prevState.selectedDocs.filter((prevDocs) => prevDocs !== selectedDocsValue) })),
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export const useDocumnetContext = (): IAppContextProps => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }

    return context;
};
