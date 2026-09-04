import { createContext, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage('favoriteRecipeIds', [])

  function addFavorite(recipeId) {
    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(recipeId)) {
        return currentFavorites
      }

      return [...currentFavorites, recipeId]
    })
  }

  function removeFavorite(recipeId) {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((id) => id !== recipeId),
    )
  }

  function isFavorite(recipeId) {
    return favorites.includes(recipeId)
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  return useContext(FavoritesContext)
}
