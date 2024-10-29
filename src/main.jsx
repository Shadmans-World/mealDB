import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home";
import Meals from "./Components/Meals/Meals";
import FilterCategories from "./Filter Categories/FilterCategories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: '/meals',
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <Meals></Meals>
      },
      {
        path: '/meals/:filterCategories',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.filterCategories}`),
        element: <FilterCategories></FilterCategories>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
