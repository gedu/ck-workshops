const favoritesMap = new Map();

export function toggleFavorite(id) {
  if (favoritesMap.has(id)) {
    favoritesMap.delete(id);
  } else {
    favoritesMap.set(id, true);
  }
}

export function isFavorite(id) {
  return favoritesMap.has(id);
}

export function clean() {
  favoritesMap.clear();
}