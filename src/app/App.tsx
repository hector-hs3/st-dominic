import React from "react";
import Root from "components/Root";
import Error from "components/Error";
import Home from "components/Home";
import Calendar from "components/Calendar";
import Sacraments from "components/Sacraments";
import Parish from "components/Parish";
import Resources from "components/Resources";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Paths } from "configs/navigation";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={Paths.HOME} element={<Root />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path={Paths.CALENDAR} element={<Calendar />} />
      <Route path={Paths.SACRAMENTS} element={<Sacraments />} />
      <Route path={Paths.PARISH} element={<Parish />} />
      <Route path={Paths.RESOURCES} element={<Resources />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
