import React from 'react';
import {
  HashRouter, Route, Routes
} from "react-router-dom";
import { Container, Main } from "./App.style";
import Helmet from "./Helmet";
import TabsData from "./../../data/Tabs.json";
import DefaultContent from "../DefaultContent/DefaultContent";
import ContentLoader from "../ContentLoader/ContentLoader";
import Header from "../Header/Header";

const App = () => (
  <Container>
    <HashRouter>
      <Helmet />
      <Header />
      <Main>
        <Routes>
          <Route index element={<DefaultContent />} />
          {TabsData.map((tabData, index) => (
            <Route
              key={index}
              path={tabData.path}
              element={
                (tabData.queryData ?
                  <ContentLoader tabData={tabData} /> :
                  <DefaultContent />)
              }
            />
          ))}
          <Route path="*" element={<DefaultContent />} />
        </Routes>
      </Main>
    </HashRouter>
  </Container>
);

export default App;
