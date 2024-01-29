import { propertiesOfNavegation, nextBtn, backBtn} from './Variables.js';
import { nextBtnCharClick, nextBtnEpisClick, nextBtnLocClick, backBtnCharClick, backBtnEpisClick, backBtnLocClick } from './Event.js';
import { printAsideEpisodes, printMainEspisode } from './index.js';



document.addEventListener('DOMContentLoaded', () => {
    printAsideEpisodes(1,11)

    printMainEspisode(1)

    nextBtn.addEventListener('click', () => {
        if (propertiesOfNavegation.aside === 'episodes') { nextBtnEpisClick() }
        if (propertiesOfNavegation.aside === 'characters') { nextBtnCharClick() }
        if (propertiesOfNavegation.aside === 'locations') { nextBtnLocClick() }
    })

    backBtn.addEventListener('click', () => {
        if (propertiesOfNavegation.aside === 'episodes') { backBtnEpisClick() }
        if (propertiesOfNavegation.aside === 'characters') { backBtnCharClick() }
        if (propertiesOfNavegation.aside === 'locations') { backBtnLocClick() }
    } )

    
})
