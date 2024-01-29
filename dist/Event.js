import { characterUrl, locationUrl, nextBtn, backBtn } from "./Variables.js";
import { printMainCharacter, printAsideCharacters, printAsideEpisodes, printMainEspisode, printMainLocation, printAsideLocations } from "./index.js";
export const MainCharacterClick = (e) => {
    const characterId = Number(e.target.getAttribute('char-id') || e.target.parentElement.getAttribute('char-id') || e.target.parentElement.parentElement.getAttribute('char-id'));
    printAsideCharacters(characterUrl);
    printMainCharacter(characterId);
};
export const MainEpisodeClick = (e) => {
    var _a, _b;
    const episodeId = Number(((_a = e.target) === null || _a === void 0 ? void 0 : _a.getAttribute('episode-id')) || ((_b = e.target) === null || _b === void 0 ? void 0 : _b.parentElement.getAttribute('episode-id')));
    printMainEspisode(episodeId);
    printAsideEpisodes(1, 11);
};
export const MainLocationClick = () => {
    const locationFromCharacter = document.getElementById('locationFromMain');
    const locationIdNumber = Number(locationFromCharacter.getAttribute('location-id'));
    printMainLocation(locationIdNumber);
    printAsideLocations(locationUrl);
};
export const AsideEpisodeClick = (e) => {
    const id = e.target.getAttribute('episode-id') || e.target.parentElement.getAttribute('episode-id');
    printMainEspisode(id);
};
export const AsideCharacterClick = (e) => {
    const id = e.target.getAttribute('character-id');
    printMainCharacter(id);
};
export const AsideLocationClick = (e) => {
    const id = e.target.getAttribute('location-id');
    printMainLocation(id);
};
export const nextBtnEpisClick = () => {
    if (nextBtn.classList.contains('disabled'))
        return;
    const start = Number(nextBtn.getAttribute('start-data'));
    const end = Number(nextBtn.getAttribute('end-data'));
    if (start === 12) {
        backBtn.classList.remove('bg-gray-500', 'cursor-default', 'disabled');
        backBtn.classList.add('bg-gray-800');
    }
    printAsideEpisodes(start, end);
};
export const backBtnEpisClick = () => {
    if (backBtn.classList.contains('disabled'))
        return;
    const start = Number(backBtn.getAttribute('start-data'));
    const end = Number(backBtn.getAttribute('end-data'));
    if (start === 32) {
        nextBtn.classList.remove('bg-gray-500', 'cursor-default', 'disabled');
        nextBtn.classList.add('bg-gray-800');
    }
    printAsideEpisodes(start, end);
};
export const backBtnCharClick = () => {
    if (backBtn.classList.contains('disabled'))
        return;
    const url = backBtn.getAttribute('prev-data');
    printAsideCharacters(url);
};
export const nextBtnCharClick = () => {
    if (nextBtn.classList.contains('disabled'))
        return;
    const url = nextBtn.getAttribute('next-data');
    printAsideCharacters(url);
};
export const backBtnLocClick = () => {
    if (backBtn.classList.contains('disabled'))
        return;
    const url = backBtn.getAttribute('prev-data');
    printAsideLocations(url);
};
export const nextBtnLocClick = () => {
    if (nextBtn.classList.contains('disabled'))
        return;
    const url = nextBtn.getAttribute('next-data');
    printAsideLocations(url);
};
//# sourceMappingURL=Event.js.map