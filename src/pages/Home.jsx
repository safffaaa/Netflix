import React from "react";
import Page from "../components/Page.jsx";
import Row from "../components/Row.jsx";
import requests from "../request.js";
import FullLayout from "../layout/FullLayout.jsx";

function Home() {
  return (
    <FullLayout>
      <Page />,
      <Row title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row title="Horror" fetchURL={requests.requestHorror} />
    </FullLayout>
  );
}

export default Home;
