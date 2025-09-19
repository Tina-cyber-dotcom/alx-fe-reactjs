import React from 'react'
import { useRecipeStore } from './recipeStore'
import { useNavigate } from 'react-router-dom'

const DeleteRecipeButton = ({ recipeId, redirectTo = '/' }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe)
  const navigate = useNavigate()

  const handleDelete = () => {
    if (!window.confirm('Are you sure you want to delete this recipe?')) return
    deleteRecipe(recipeId)
    navigate(redirectTo)
  }

  return (
    <button
      onClick={handleDelete}
      style={{
        background: '#e74c3c',
        color: 'white',
        border: 'none',
        padding: '6px 10px',
        borderRadius: 4,
      }}
    >
      Delete
    </button>
  )
}

export default DeleteRecipeButton
