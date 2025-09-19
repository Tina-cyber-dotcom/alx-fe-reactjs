import React from 'react'
import { useRecipeStore } from './recipeStore'
import { useNavigate } from 'react-router-dom'

const EditRecipeForm = ({ recipe, onDone }) => {
  const updateRecipe = useRecipeStore((s) => s.updateRecipe)
  const [title, setTitle] = React.useState(recipe.title || '')
  const [description, setDescription] = React.useState(recipe.description || '')
  const [ingredientsText, setIngredientsText] = React.useState(
    (recipe.ingredients || []).join('\n')
  )
 const [stepsText, setStepsText] = React.useState((recipe.steps || []).join('\n'))
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const updated = {
      title: title.trim(),
      description: description.trim(),
      ingredients: ingredientsText.split('\n').map((s) => s.trim()).filter(Boolean),
      steps: stepsText.split('\n').map((s) => s.trim()).filter(Boolean),
    }

    updateRecipe(recipe.id, updated)
    if (typeof onDone === 'function') onDone()
    navigate(`/recipes/${recipe.id}`)
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8, maxWidth: 600 }}>
      <label>
        Title
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>

      <label>
        Description
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>

      <label>
        Ingredients (one per line)
        <textarea value={ingredientsText} onChange={(e) => setIngredientsText(e.target.value)} />
      </label>

      <label>
        Steps (one per line)
        <textarea value={stepsText} onChange={(e) => setStepsText(e.target.value)} />
      </label>

      <div>
        <button type="submit" style={{ marginRight: 8 }}>
          Save
        </button>
        <button type="button" onClick={() => onDone?.()}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default EditRecipeForm
