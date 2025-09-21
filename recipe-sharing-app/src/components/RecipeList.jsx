import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const { searchTerm, filteredRecipes, recipes } = useRecipeStore();

  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  if (displayRecipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <ul>
      {displayRecipes.map((recipe) => (
        <li key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
