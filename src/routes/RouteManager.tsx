import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Loading from "../components/common/Loading";
import { routesData } from "./routesdata";

const RouteManager: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          {routesData.map((route) => (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.path}
            />
          ))}
        </Routes>
      </Suspense>
    </>
  );
};

export default RouteManager;
