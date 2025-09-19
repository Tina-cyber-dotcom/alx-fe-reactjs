import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton'

const RecipeDetails = () => {
  const { id } = useParams()
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id))
  const [isEditing, setIsEditing] = React.useState(false)
  const navigate = useNavigate()

  if (!recipe) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Recipe not found</h2>
        <p>
          It looks like this recipe doesn't exist. <Link to="/">Return home</Link>.
        </p>
      </div>
    )
  }

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => navigate(-1)}>&larr; Back</button>

      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients?.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>

      <h3>Steps</h3>
      <ol>
        {recipe.steps?.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => setIsEditing((s) => !s)} style={{ marginRight: 8 }}>
          {isEditing ? 'Cancel edit' : 'Edit'}
        </button>
        <DeleteRecipeButton recipeId={id} redirectTo="/" />
      </div>

      {isEditing && (
        <div style={{ marginTop: 20 }}>
          <h2>Edit Recipe</h2>
          <EditRecipeForm recipe={recipe} onDone={() => setIsEditing(false)} />
        </div>
      )}
    </div>
  )
}

export default RecipeDetails
