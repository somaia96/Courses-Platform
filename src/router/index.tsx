import CartPage from "../Pages/CartPage";
import HomePage from "../Pages/HomePage";
import NotFoundPage from "../Pages/NotFoundPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import CoursesPage from "../Pages/CoursesPage";
import CourseDetailsPage from "../Pages/CourseDetailsPage";
import LoginPage from "../Pages/LoginPage";
import Layout from "../component/Layout";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route path="login" element={<LoginPage />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="courses" >
          <Route index element={<CoursesPage />} />
          <Route path=":id" element={<CourseDetailsPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);
