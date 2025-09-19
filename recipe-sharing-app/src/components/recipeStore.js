import { create } from 'zustand';

const generateId = () => String(Date.now())

export const useRecipeStore = create((set, get) => ({
  recipes: [
    {
      id: '1',
      title: 'Spaghetti Aglio e Olio',
      description: 'Simple pasta with garlic, oil, chili flakes, parsley.',
      ingredients: ['spaghetti', 'garlic', 'olive oil', 'chili flakes', 'parsley'],
      steps: ['Boil pasta', 'Sauté garlic', 'Toss together'],
    },
    {
      id: '2',
      title: 'Avocado Toast',
      description: 'Toasted bread with smashed avocado and lemon.',
      ingredients: ['bread', 'avocado', 'lemon', 'salt'],
      steps: ['Toast bread', 'Smash avocado', 'Top and serve'],
    },
  ],

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { ...recipe, id: recipe.id ?? generateId() }],
    })),

  updateRecipe: (id, updatedFields) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...updatedFields } : r)),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  getRecipeById: (id) => get().recipes.find((r) => r.id === id),
}))

