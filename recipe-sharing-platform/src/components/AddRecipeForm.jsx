import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !steps) {
      setError("⚠️ All fields are required!");
      return;
    }

    const ingredientList = ingredients.split("\n").filter((line) => line.trim() !== "");
    if (ingredientList.length < 2) {
      setError("⚠️ Please provide at least 2 ingredients.");
      return;
    }

    setError("");

    // For now, just log the data (later you could push it to state or backend)
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredientList,
      instructions: steps.split("\n").filter((line) => line.trim() !== ""),
    };

    console.log("New Recipe:", newRecipe);

    // Clear the form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">➕ Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-2xl p-6 space-y-4">
        {error && <p className="text-red-500 font-semibold">{error}</p>}

        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="e.g. Chocolate Cake"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-semibold mb-1">Ingredients (one per line)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="e.g. 2 cups flour\n1 cup sugar\n3 eggs"
          ></textarea>
        </div>

        {/* Steps */}
        <div>
          <label className="block font-semibold mb-1">Preparation Steps (one per line)</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="4"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="e.g. Mix ingredients\nBake at 180°C for 25 mins"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
