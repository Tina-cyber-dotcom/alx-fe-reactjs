import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useRecipeStore } from './components/recipeStore'
import RecipeDetails from './components/RecipeDetails'

const Home = () => {
  const recipes = useRecipeStore((s) => s.recipes)

  return (
    <div style={{ padding: 20 }}>
      <h1>Recipe Sharing App</h1>
      <p>Click a recipe to view details:</p>
      <ul>
        {recipes.map((r) => (
          <li key={r.id}>
            <Link to={`/recipes/${r.id}`}>{r.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/create">➕ Add New Recipe</Link>
    </div>
  )
}

const CreateRecipeForm = () => {
  const addRecipe = useRecipeStore((s) => s.addRecipe)
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [ingredientsText, setIngredientsText] = React.useState('')
  const [stepsText, setStepsText] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addRecipe({
      title: title.trim(),
      description: description.trim(),
      ingredients: ingredientsText.split('\n').map((s) => s.trim()).filter(Boolean),
      steps: stepsText.split('\n').map((s) => s.trim()).filter(Boolean),
    })
    setTitle('')
    setDescription('')
    setIngredientsText('')
    setStepsText('')
    alert('Recipe added!')
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Add a New Recipe</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'grid', gap: 8, maxWidth: 600 }}
      >
        <label>
          Title
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <label>
          Ingredients (one per line)
          <textarea
            value={ingredientsText}
            onChange={(e) => setIngredientsText(e.target.value)}
          />
        </label>

        <label>
          Steps (one per line)
          <textarea
            value={stepsText}
            onChange={(e) => setStepsText(e.target.value)}
          />
        </label>

        <button type="submit">Add Recipe</button>
      </form>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          padding: 10,
          background: '#f5f5f5',
          marginBottom: 20,
        }}
      >
        <Link to="/" style={{ marginRight: 8 }}>
          Home
        </Link>
        <Link to="/create">Create</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateRecipeForm />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
