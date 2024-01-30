import { Character, Episode, Location } from "./types.js"
    
export const getEpisodes = async ( url:string ) => { 
    
    const response = await fetch(url) 
    const data = await response.json() 

    return data 
}

export const getCharacters = async ( url:string ) => { 

    const response = await fetch(url) 
    const data = await response.json() 

    return data
}

export const getLocations = async ( url:string ) => {

    const response = await fetch(url)
    const data = await response.json()

    return data
} 

export const getEpisodeData = async ( id: number ):Promise<Episode> => {

    const url = 'https://rickandmortyapi.com/api/episode/' + id
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const getCharacterData = async (id: number ):Promise<Character> => { 

    const url = 'https://rickandmortyapi.com/api/character/' + id  
    const response = await fetch(url) 
    const data = await response.json() 

    return data 
}

export const getLocationData = async (id: number ):Promise<Location> => {  

    const url = 'https://rickandmortyapi.com/api/location/' + id 
    const response = await fetch(url)
    const data = await response.json() 


    return data
}