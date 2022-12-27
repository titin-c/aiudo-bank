
import { setPersonajes, startLoadingPersonajes } from "./rickAndMortySlice"

export const getPersonajes = (page=0)=>{

    return async(dispatch) =>{
        dispatch(startLoadingPersonajes());

        const resp = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        const data = await resp.json();
        


        dispatch(setPersonajes({ personajes : data.results, page:page + 1 }));
    }

}