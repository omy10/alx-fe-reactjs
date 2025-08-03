// src/App.jsx
import AddRecipeForm from '../src/components/AddRecipeForm';
import RecipeList from '../src/components/RecipeList';

function App() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-center mb-6"> Recipe Manager</h1>
      <AddRecipeForm />
      <hr className="my-6" />
      <RecipeList />
    </div>
  );
}

export default App;
