import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { LoginPage } from "./pages/LoginPage";
import FavouritesPage from "./pages/FavouritesPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";
import { ProtectedRoute } from "./components/ProtectedRoute";

export const AppRoutes = ({ loaded, error, setShown, setError, setLoaded }) => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        element={
          <ProtectedRoute isAllowed={Boolean(localStorage.getItem("user"))} />
        }
      >
        <Route
          path="/"
          element={
            <MainPage
              loaded={loaded}
              error={error}
              setShown={setShown}
              setLoaded={setLoaded}
              setError={setError}
            />
          }
        />
        <Route
          path="/favourites"
          element={
            <FavouritesPage
              loaded={loaded}
              error={error}
              setShown={setShown}
              setError={setError}
              setLoaded={setLoaded}
            />
          }
        />
        <Route
          path="/category/:id"
          element={
            <CategoryPage
              loaded={loaded}
              error={error}
              setShown={setShown}
              setLoaded={setLoaded}
              setError={setError}
            />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
