import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { LoginPage } from "./pages/LoginPage";
import FavouritesPage from "./pages/FavouritesPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";
import { ProtectedRoute } from "./components/ProtectedRoute";

export const AppRoutes = ({ tracks, loaded, error }) => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        element={
          <ProtectedRoute
            isAllowed={Boolean(localStorage.getItem("user") === "true")}
          />
        }
      >
        <Route
          path="/"
          element={<MainPage tracks={tracks} loaded={loaded} error={error} />}
        />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
