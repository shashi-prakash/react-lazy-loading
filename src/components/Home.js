import { Link } from "react-router-dom";
// import Articles from "./Articles";
import React from "react";
import { Suspense } from "react";
const Articles = React.lazy(() => import("./Articles"));
export default function Home() {
  return (
    <>
      <div>
        <Suspense fallback={<div id="loading"></div>}>
          <Articles />
        </Suspense>
      </div>

      <div className="row">
        <Link to="/about">
          <button>About us</button>
        </Link>
      </div>
    </>
  );
}
