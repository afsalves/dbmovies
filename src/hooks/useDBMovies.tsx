import React, { createContext, useCallback, useContext } from 'react';
import {moviesApi} from '@apis/moviesApi'

interface IDBMoviesContext {
    getLastestMovies: () =>Promise<any>
}


const DBMoviesContext = createContext<IDBMoviesContext>({} as IDBMoviesContext)

export const DBMoviesProvider: React.FC =({children}) =>{

    const getLastestMovies = useCallback(async () =>{
        const response = await moviesApi.get(`/popular?api_key=${process.env.REACT_APP_API_KEY}`)
    return response.data
}, []);


    return (
        <DBMoviesContext.Provider
        value={{
            getLastestMovies,
        }}>
            {children}
        </DBMoviesContext.Provider>
    );
};

export default function useDBMovies(){
    const context = useContext(DBMoviesContext);
    return context
}

