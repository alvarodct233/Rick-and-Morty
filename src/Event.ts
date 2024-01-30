

import { characterUrl, locationUrl, nextBtn, backBtn} from "./Variables.js"
import { printMainCharacter, printAsideCharacters, printAsideEpisodes, printMainEspisode, printMainLocation, printAsideLocations } from "./index.js"


export const MainCharacterClick = (e:any) => {
    
    const characterId:number = Number(e.target.getAttribute('char-id') || e.target.parentElement.getAttribute('char-id')||e.target.parentElement.parentElement.getAttribute('char-id'))
    printAsideCharacters( characterUrl )
    printMainCharacter(characterId)
} 

export const MainEpisodeClick = (e:any) => {

    const episodeId = Number( e.target?.getAttribute('episode-id') || e.target?.parentElement.getAttribute('episode-id')) 
    printMainEspisode( episodeId )
    printAsideEpisodes( 1, 11 )
}

export const MainLocationClick = () => {  

    const locationFromCharacter = document.getElementById('locationFromMain') as HTMLSpanElement
    const locationIdNumber = Number(locationFromCharacter.getAttribute('location-id'))
    printMainLocation(locationIdNumber)
    printAsideLocations( locationUrl )
}


export const AsideEpisodeClick = (e:any):void => {
    
    const id = e.target.getAttribute('episode-id') || e.target.parentElement.getAttribute('episode-id')

    printMainEspisode(id)    
}

export const AsideCharacterClick = (e:any):void => {

    const id = e.target.getAttribute('character-id')

    printMainCharacter(id)    
}

export const AsideLocationClick = (e:any):void => {
    const id = e.target.getAttribute('location-id')

    printMainLocation(id)   
}

export const nextBtnEpisClick = ():void => {
    if ( nextBtn.classList.contains('disabled')) return

    const start:number = Number(nextBtn.getAttribute('start-data'))
    const end:number = Number(nextBtn.getAttribute('end-data'))

    if ( start === 12 ){
        backBtn.classList.remove('bg-gray-500', 'cursor-default','disabled')
        backBtn.classList.add('bg-gray-800')
    }

    printAsideEpisodes(start, end)
}

export const backBtnEpisClick = ():void => {
    if ( backBtn.classList.contains('disabled')) return

    const start:number = Number(backBtn.getAttribute('start-data'))
    const end:number = Number(backBtn.getAttribute('end-data'))

    if ( start === 32 ){
        nextBtn.classList.remove('bg-gray-500', 'cursor-default','disabled')
        nextBtn.classList.add('bg-gray-800')
    }

    printAsideEpisodes(start, end)
}

export const backBtnCharClick = ():void => {
    if ( backBtn.classList.contains('disabled') ) return

    const url:string = backBtn.getAttribute('prev-data')!

    printAsideCharacters( url )
}

export const nextBtnCharClick = ():void => {
    if ( nextBtn.classList.contains('disabled') ) return

    const url:string = nextBtn.getAttribute('next-data')!

    printAsideCharacters( url )

}

export const backBtnLocClick = ():void => {
    if ( backBtn.classList.contains('disabled') ) return

    const url:string = backBtn.getAttribute('prev-data')!

    printAsideLocations( url )
}

export const nextBtnLocClick = ():void => {
    if ( nextBtn.classList.contains('disabled') ) return

    const url:string = nextBtn.getAttribute('next-data')!

    printAsideLocations( url )
}