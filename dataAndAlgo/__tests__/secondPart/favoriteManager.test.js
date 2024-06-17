import { toggleFavorite, isFavorite, clean } from "../../src/secondPart/favoriteManager";

describe('CHECK: favoriteManager', () => {

    afterEach(() => {
        clean();
    });

    test('SIMPLE: add favorite', () => {
        toggleFavorite('Alice');
        expect(isFavorite('Alice')).toBeTruthy();
    });

    test('SIMPLE: remove favorite', () => {
        toggleFavorite('Alice');
        toggleFavorite('Alice');
        expect(isFavorite('Alice')).toBeFalsy();
    });

    test('SIMPLE: check multiple favorite', () => {
        toggleFavorite('Alice');
        toggleFavorite('Bob');
        toggleFavorite('Alice');
        toggleFavorite('Ron');
        toggleFavorite('Luke');
        expect(isFavorite('Ron')).toBeTruthy();
        expect(isFavorite('Pepe')).toBeFalsy();
        expect(isFavorite('Alice')).toBeFalsy();
    });

});