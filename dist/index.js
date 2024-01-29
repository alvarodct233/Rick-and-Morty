//PRINT ASIDES
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getCharacterData, getCharacters, getEpisodeData, getLocationData, getLocations } from "./Requests.js";
import { BoxList, PBox, BoxTitle, pricipalBox, propertiesOfNavegation, nextBtn, backBtn } from "./Variables.js";
import { AsideCharacterClick, AsideEpisodeClick, AsideLocationClick, MainCharacterClick, MainEpisodeClick, MainLocationClick } from "./Event.js";
const printCharactersListForMain = (characters) => {
    const charactersUl = document.createElement('ul');
    charactersUl.classList.add('ps-2', 'charactercard', 'flex-wrap', 'gap-4');
    characters.forEach(each => {
        const li = document.createElement('li');
        const liBox = document.createElement('div');
        liBox.classList.add('mb-1', 'mr-2');
        fetch(each)
            .then(resp => resp.json())
            .then(data => {
            liBox.setAttribute('char-id', data.id);
            const img = document.createElement('img');
            img.src = data.image;
            img.classList.add('w-60', 'rounded-lg', 'cursor-pointer');
            liBox.appendChild(img);
            const characterHeader = document.createElement('h5');
            characterHeader.classList.add('text-xl');
            characterHeader.textContent = data.name;
            liBox.appendChild(characterHeader);
            const characterInfoBox = document.createElement('div');
            const characterStatusP = document.createElement('p');
            characterStatusP.textContent = `Status: ${data.status}`;
            characterInfoBox.appendChild(characterStatusP);
            const characterSpecieP = document.createElement('p');
            characterSpecieP.textContent = `Specie: ${data.species}`;
            characterInfoBox.appendChild(characterSpecieP);
            liBox.appendChild(characterInfoBox);
        });
        li.appendChild(liBox);
        charactersUl.appendChild(li);
    });
    return charactersUl;
};
const printAsideEpisodesListForMain = (episodes) => {
    const episodesUl = document.createElement('ul');
    episodesUl.classList.add('ps-2', 'flex', 'flex-wrap', 'gap-4');
    episodes.forEach(each => {
        const li = document.createElement('li');
        const liBox = document.createElement('div');
        liBox.classList.add('mb-1', 'mr-2', 'episodeFromMain', 'w-48', 'cursor-pointer');
        fetch(each)
            .then(resp => resp.json())
            .then(data => {
            liBox.setAttribute('episode-id', data.id);
            const episodeHeader = document.createElement('h5');
            episodeHeader.classList.add('text-xl');
            episodeHeader.textContent = data.name;
            liBox.appendChild(episodeHeader);
            const episodeCodeP = document.createElement('p');
            episodeCodeP.textContent = data.episode;
            liBox.appendChild(episodeCodeP);
            const episodeAirDateP = document.createElement('p');
            episodeAirDateP.textContent = data.air_date;
            liBox.appendChild(episodeAirDateP);
        });
        li.appendChild(liBox);
        episodesUl.appendChild(li);
    });
    return episodesUl;
};
export const cleanAsideEvents = () => {
    const episodesList = document.querySelectorAll('.asideListEpisode');
    episodesList === null || episodesList === void 0 ? void 0 : episodesList.forEach(element => element.removeEventListener('click', AsideEpisodeClick));
    const characterList = document.querySelectorAll('.asideListCharacter');
    characterList === null || characterList === void 0 ? void 0 : characterList.forEach(element => element.addEventListener('click', AsideCharacterClick));
    const locationList = document.querySelectorAll('.asideListLocation');
    locationList === null || locationList === void 0 ? void 0 : locationList.forEach(element => element.addEventListener('click', AsideLocationClick));
};
export const printAsideEpisodes = (start, end) => __awaiter(void 0, void 0, void 0, function* () {
    if (!start || !end)
        return;
    cleanAsideEvents();
    propertiesOfNavegation.aside = 'episodes';
    let season = '';
    if (start === 1) {
        season = "Season 01";
        backBtn.setAttribute('start-data', '');
        backBtn.setAttribute('end-data', '');
        backBtn.classList.add('bg-gray-500', 'cursor-default', 'disabled');
        backBtn.classList.remove('bg-gray-800');
        nextBtn.setAttribute('start-data', '12');
        nextBtn.setAttribute('end-data', '21');
    }
    if (start === 12) {
        season = "Season 02";
        backBtn.setAttribute('start-data', '1');
        backBtn.setAttribute('end-data', '11');
        nextBtn.setAttribute('start-data', '22');
        nextBtn.setAttribute('end-data', '31');
    }
    if (start === 22) {
        season = "Season 03";
        backBtn.setAttribute('start-data', '12');
        backBtn.setAttribute('end-data', '21');
        nextBtn.setAttribute('start-data', '32');
        nextBtn.setAttribute('end-data', '41');
    }
    if (start === 32) {
        season = "Season 04";
        backBtn.setAttribute('start-data', '22');
        backBtn.setAttribute('end-data', '31');
        nextBtn.setAttribute('start-data', '42');
        nextBtn.setAttribute('end-data', '51');
    }
    if (start === 42) {
        season = "Season 05";
        backBtn.setAttribute('start-data', '32');
        backBtn.setAttribute('end-data', '41');
        nextBtn.setAttribute('start-data', '');
        nextBtn.setAttribute('end-data', '');
        nextBtn.classList.add('bg-gray-500', 'cursor-default', 'disabled');
        nextBtn.classList.remove('bg-gray-800');
    }
    BoxTitle.textContent = season;
    let htmlFragment = document.createDocumentFragment();
    for (let i = start; i <= end; i++) {
        const data = yield getEpisodeData(i);
        const newLi = document.createElement('li');
        newLi.setAttribute('episode-id', data.id.toString());
        newLi.classList.add('mb-1.5', 'hover:underline', 'cursor-pointer', 'asideListEpisode');
        newLi.textContent = data.name + ' ';
        const newSpan = document.createElement('span');
        newSpan.textContent = data.episode;
        newSpan.classList.add('italic', 'text-sm');
        newLi.appendChild(newSpan);
        htmlFragment.appendChild(newLi);
    }
    BoxList.innerHTML = '';
    BoxList.appendChild(htmlFragment);
    const episodesList = document.querySelectorAll('.asideListEpisode');
    episodesList.forEach(element => element.addEventListener('click', AsideEpisodeClick));
});
export const printAsideCharacters = (url) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (url === null)
        return;
    cleanAsideEvents();
    propertiesOfNavegation.aside = 'characters';
    const data = yield getCharacters(url);
    const page = Number(url.slice(47));
    const initialCharacter = page * 20 - 19;
    const lastCharacter = Math.min(page * 20, data.info.count);
    if (initialCharacter === 1) {
        backBtn.classList.add('bg-gray-500', 'cursor-default', 'disabled');
        backBtn.classList.remove('bg-gray-800');
    }
    else {
        backBtn.classList.remove('bg-gray-500', 'cursor-default', 'disabled');
        backBtn.classList.add('bg-gray-800');
    }
    if (lastCharacter === data.info.count) {
        nextBtn.classList.add('bg-gray-500', 'cursor-default', 'disabled');
        nextBtn.classList.remove('bg-gray-800');
    }
    else {
        nextBtn.classList.remove('bg-gray-500', 'cursor-default', 'disabled');
        nextBtn.classList.add('bg-gray-800');
    }
    backBtn.setAttribute('prev-data', (_a = data === null || data === void 0 ? void 0 : data.info) === null || _a === void 0 ? void 0 : _a.prev);
    backBtn.setAttribute('first-character', initialCharacter.toString());
    nextBtn.setAttribute('next-data', (_b = data === null || data === void 0 ? void 0 : data.info) === null || _b === void 0 ? void 0 : _b.next);
    nextBtn.setAttribute('last-character', lastCharacter.toString());
    BoxTitle.textContent = 'Characters';
    PBox.textContent = `There are ${data.info.count} characters. Showing from ${initialCharacter} to ${lastCharacter}. Page ${page}/${data.info.pages} `;
    const charactersList = data.results;
    BoxList.innerHTML = '';
    const HTMLFragment = document.createDocumentFragment();
    charactersList.forEach(each => {
        const newLi = document.createElement('li');
        newLi.classList.add('mb-1.5', 'hover:underline', 'cursor-pointer', 'asideListCharacter');
        newLi.setAttribute('character-id', each.id.toString());
        newLi.textContent = each.name;
        HTMLFragment.appendChild(newLi);
    });
    BoxList.appendChild(HTMLFragment);
    const characterList = document.querySelectorAll('.asideListCharacter');
    characterList.forEach(element => element.addEventListener('click', AsideCharacterClick));
});
export const printAsideLocations = (url) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    if (url === null)
        return;
    cleanAsideEvents();
    propertiesOfNavegation.aside = 'locations';
    const data = yield getLocations(url);
    const page = Number(url.slice(46));
    const initialLocation = page * 20 - 19;
    const lastLocation = Math.min(page * 20, data.info.count);
    if (initialLocation === 1) {
        backBtn.classList.add('bg-gray-500', 'cursor-default', 'disabled');
        backBtn.classList.remove('bg-gray-800');
    }
    else {
        backBtn.classList.remove('bg-gray-500', 'cursor-default', 'disabled');
        backBtn.classList.add('bg-gray-800');
    }
    if (lastLocation === data.info.count) {
        nextBtn.classList.add('bg-gray-500', 'cursor-default', 'disabled');
        nextBtn.classList.remove('bg-gray-800');
    }
    else {
        nextBtn.classList.remove('bg-gray-500', 'cursor-default', 'disabled');
        nextBtn.classList.add('bg-gray-800');
    }
    backBtn.setAttribute('prev-data', (_c = data === null || data === void 0 ? void 0 : data.info) === null || _c === void 0 ? void 0 : _c.prev);
    backBtn.setAttribute('first-location', initialLocation.toString());
    nextBtn.setAttribute('next-data', (_d = data === null || data === void 0 ? void 0 : data.info) === null || _d === void 0 ? void 0 : _d.next);
    nextBtn.setAttribute('last-location', lastLocation.toString());
    BoxTitle.textContent = 'Location';
    PBox.textContent = `There are ${data.info.count} locations. Showing from ${initialLocation} to ${lastLocation}. Page ${page}/${data.info.pages} `;
    const locationsList = data.results;
    BoxList.innerHTML = '';
    const HTMLFragment = document.createDocumentFragment();
    locationsList.forEach(each => {
        const newLi = document.createElement('li');
        newLi.classList.add('mb-1.5', 'hover:underline', 'cursor-pointer', 'asideListLocation');
        newLi.setAttribute('location-id', each.id.toString());
        newLi.textContent = each.name;
        HTMLFragment.appendChild(newLi);
    });
    BoxList.appendChild(HTMLFragment);
    const locationList = document.querySelectorAll('.asideListLocation');
    locationList.forEach(element => element.addEventListener('click', AsideLocationClick));
});
export const cleanMainEvents = () => {
    const characterList = document.querySelectorAll('.characterFromMain');
    characterList === null || characterList === void 0 ? void 0 : characterList.forEach(each => each.removeEventListener('click', MainCharacterClick));
    const episodeList = document.querySelectorAll('.episodeFromMain');
    episodeList === null || episodeList === void 0 ? void 0 : episodeList.forEach(each => each.removeEventListener('click', (e) => MainEpisodeClick));
    const locationFromCharacter = document.getElementById('locationFromCharacter');
    locationFromCharacter === null || locationFromCharacter === void 0 ? void 0 : locationFromCharacter.removeEventListener('click', () => MainLocationClick());
};
export const printMainEspisode = (id) => __awaiter(void 0, void 0, void 0, function* () {
    cleanMainEvents();
    pricipalBox.innerHTML = '';
    const { name, air_date, episode, characters, url, created } = yield getEpisodeData(id);
    const HTMLFragment = document.createDocumentFragment();
    const episodeHeader = document.createElement('h3');
    episodeHeader.classList.add('text-3xl', 'mb-2');
    episodeHeader.textContent = name;
    HTMLFragment.appendChild(episodeHeader);
    const episodeInfoBox = document.createElement('div');
    episodeInfoBox.classList.add('ms-2', 'mb-3');
    const airDateP = document.createElement('p');
    airDateP.textContent = `Air date: ${air_date}`;
    episodeInfoBox.appendChild(airDateP);
    const episodeCodeP = document.createElement('p');
    episodeCodeP.textContent = `Episode code: ${episode}`;
    episodeInfoBox.appendChild(episodeCodeP);
    HTMLFragment.appendChild(episodeInfoBox);
    const charactersBox = document.createElement('div');
    const charactersHeader = document.createElement('h4');
    charactersHeader.classList.add('text-2xl', 'mb-2');
    charactersHeader.textContent = 'Characters in this episode';
    charactersBox.appendChild(charactersHeader);
    const charactersUl = printCharactersListForMain(characters);
    charactersBox.appendChild(charactersUl);
    HTMLFragment.appendChild(charactersBox);
    pricipalBox.appendChild(HTMLFragment);
    const characterList = document.querySelectorAll('.characterFromMain');
    characterList.forEach(each => each.addEventListener('click', MainCharacterClick));
});
export const printMainCharacter = (id) => __awaiter(void 0, void 0, void 0, function* () {
    cleanMainEvents();
    const { name, status, species, type, gender, origin, location, image, episode, url, created } = yield getCharacterData(id);
    const locationId = location.url.slice(41);
    pricipalBox.innerHTML = '';
    const firstDiv = document.createElement('div');
    firstDiv.classList.add('flex', 'gap-4', 'mb-4');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    img.src = image;
    imgDiv.appendChild(img);
    firstDiv.appendChild(imgDiv);
    const textDiv = document.createElement('div');
    const textHeader = document.createElement('h3');
    textHeader.classList.add('text-3xl');
    textHeader.textContent = name;
    textDiv.appendChild(textHeader);
    const specieP = document.createElement('p');
    specieP.classList.add('font-bold');
    specieP.textContent = 'Specie: ';
    const specieSpan = document.createElement('span');
    specieSpan.classList.add('font-normal');
    specieSpan.textContent = species;
    specieP.appendChild(specieSpan);
    textDiv.appendChild(specieP);
    const statusP = document.createElement('p');
    statusP.classList.add('font-bold');
    statusP.textContent = 'Status: ';
    const statusSpan = document.createElement('span');
    statusSpan.classList.add('font-normal');
    statusSpan.textContent = status;
    statusP.appendChild(statusSpan);
    textDiv.appendChild(statusP);
    const genderP = document.createElement('p');
    genderP.classList.add('font-bold');
    genderP.textContent = 'Gender: ';
    const genderSpan = document.createElement('span');
    genderSpan.classList.add('font-normal');
    genderSpan.textContent = gender;
    genderP.appendChild(genderSpan);
    textDiv.appendChild(genderP);
    const locationP = document.createElement('p');
    locationP.classList.add('font-bold');
    locationP.textContent = 'Location: ';
    const locationSpan = document.createElement('span');
    locationSpan.id = 'locationFromMain';
    locationSpan.classList.add('font-normal', 'cursor-pointer');
    locationSpan.setAttribute('location-id', locationId);
    locationSpan.textContent = location.name;
    locationP.appendChild(locationSpan);
    textDiv.appendChild(locationP);
    firstDiv.appendChild(textDiv);
    const secondDiv = document.createElement('div');
    secondDiv.classList.add('ms-2');
    const secondDivHeader = document.createElement('h4');
    secondDivHeader.classList.add('text-2xl', 'mb-2', 'font-semibold');
    secondDivHeader.textContent = `List of episodes where ${name} appears`;
    secondDiv.appendChild(secondDivHeader);
    const episodeUl = printAsideEpisodesListForMain(episode);
    secondDiv.appendChild(episodeUl);
    pricipalBox.append(firstDiv, secondDiv);
    const episodeList = document.querySelectorAll('.episodeFromMain');
    episodeList.forEach(each => each.addEventListener('click', MainEpisodeClick));
    const locationFromCharacter = document.getElementById('locationFromMain');
    locationFromCharacter.addEventListener('click', MainLocationClick);
});
export const printMainLocation = (id) => __awaiter(void 0, void 0, void 0, function* () {
    cleanMainEvents();
    const { name, type, dimension, residents, url, created } = yield getLocationData(id);
    pricipalBox.innerHTML = '';
    const HTMLFragment = document.createDocumentFragment();
    const locationHeader = document.createElement('h3');
    locationHeader.classList.add('text-3xl', 'mb-2');
    locationHeader.textContent = name;
    HTMLFragment.appendChild(locationHeader);
    const typeP = document.createElement('p');
    typeP.classList.add('font-bold', 'mb-2');
    typeP.textContent = 'Type: ';
    const typeSpan = document.createElement('span');
    typeSpan.classList.add('font-normal');
    typeSpan.textContent = type;
    typeP.appendChild(typeSpan);
    HTMLFragment.appendChild(typeP);
    const dimensionP = document.createElement('p');
    dimensionP.classList.add('font-bold', 'mb-2');
    dimensionP.textContent = 'Dimension: ';
    const dimensionSpan = document.createElement('span');
    dimensionSpan.classList.add('font-normal');
    dimensionSpan.textContent = dimension;
    dimensionP.appendChild(dimensionSpan);
    HTMLFragment.appendChild(dimensionP);
    const listDiv = document.createElement('div');
    listDiv.classList.add('mb-4');
    const listHeader = document.createElement('h4');
    listHeader.classList.add('text-2xl', 'mb-2');
    listHeader.textContent = 'Characters from this dimension';
    listDiv.appendChild(listHeader);
    const charactersUl = printCharactersListForMain(residents);
    listDiv.appendChild(charactersUl);
    HTMLFragment.appendChild(listDiv);
    pricipalBox.appendChild(HTMLFragment);
    const characterList = document.querySelectorAll('.characterFromMain');
    characterList.forEach(each => each.addEventListener('click', MainCharacterClick));
});
//# sourceMappingURL=index.js.map