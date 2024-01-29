var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const getEpisodes = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    const data = yield response.json();
    return data;
});
export const getCharacters = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    const data = yield response.json();
    return data;
});
export const getLocations = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    const data = yield response.json();
    return data;
});
export const getEpisodeData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const url = 'https://rickandmortyapi.com/api/episode/' + id;
    const response = yield fetch(url);
    const data = yield response.json();
    return data;
});
export const getCharacterData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const url = 'https://rickandmortyapi.com/api/character/' + id;
    const response = yield fetch(url);
    const data = yield response.json();
    return data;
});
export const getLocationData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const url = 'https://rickandmortyapi.com/api/location/' + id;
    const response = yield fetch(url);
    const data = yield response.json();
    return data;
});
//# sourceMappingURL=Requests.js.map