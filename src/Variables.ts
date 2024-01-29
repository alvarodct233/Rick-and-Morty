export const characterUrl = 'https://rickandmortyapi.com/api/character?page=1'
export const locationUrl = 'https://rickandmortyapi.com/api/location?page=1'


export const pricipalBox = document.getElementById('pricipalBox') as HTMLElement 

export const asideBox = document.getElementById('asideBox') as HTMLElement 
export const BoxTitle = document.getElementById('BoxTitle') as HTMLHeadingElement
export const PBox = document.getElementById('PBox') as HTMLParagraphElement
export const BoxList = document.getElementById('BoxList') as HTMLUListElement
export const backBtn= document.getElementById('backBtn') as HTMLButtonElement
export const nextBtn = document.getElementById('nextBtn') as HTMLButtonElement

export const propertiesOfNavegation: {
    aside: string,
    main: string,
} = {
    aside: 'episodes',
    main: 'episodes'
}



