import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Recipe Sharing App</h1>
              <AddRecipeForm />   {/* ✅ Added */}
              <SearchBar />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
