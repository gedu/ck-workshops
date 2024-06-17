import {measureFunction} from 'reassure';
import { toggleFavorite, isFavorite, clean } from "../../src/secondPart/favoriteManager";

describe("PERFORMANCE: favoriteManager", () => {

    test("Toggle favorites", async () => {
        function toggleFavorites() {
            for (let i = 0; i < 100000; i++) {
                const randomUser = Math.random();
                toggleFavorite(randomUser);
            }
        };
        await measureFunction(toggleFavorites);
    });

    test("Check favorites", async () => {
        function checkFavorites() {
            for (let i = 0; i < 100000; i++) {
                const randomUser = Math.random();
                isFavorite(randomUser);
            }
        };
        await measureFunction(checkFavorites);
    });
});