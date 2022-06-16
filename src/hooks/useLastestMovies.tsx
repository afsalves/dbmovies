import React, { createContext, useCallback, useContext } from 'react';
import {moviesApi} from '@apis/moviesApi'
import appEnvironments from '@utils/enviroments';


const apiKey = appEnvironments.apiKey;

interface ILastestMoviesContext {
    getLastestMovies: () =>Promise<any>
}


const LastestMoviesContext = createContext<ILastestMoviesContext>({} as ILastestMoviesContext)

export const LastestMoviesProvider: React.FC =({children}) =>{

    const getLastestMovies = useCallback(async () =>{
        const response = await moviesApi.get(`/latest?api_key=${apiKey}`)
    return response.data
}, []);


    return (
        <LastestMoviesContext.Provider
        value={{
            getLastestMovies,
        }}>
            {children}
        </LastestMoviesContext.Provider>
    );
};

export default function useLastestMovies(){
    const context = useContext(LastestMoviesContext);
    return context
}

