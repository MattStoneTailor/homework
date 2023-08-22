import React from 'react';
import {
  HashRouter, Route, Routes
} from "react-router-dom";
import { Container, Main } from "./App.style";
import Helmet from "./Helmet";
import TabsData from "./../../data/Tabs.json";
import ContentLoader from "../ContentLoader/ContentLoader";
import Header from "../Header/Header";
import { staticContents } from "./App.config";
import HomeContent from "../HomeContent/HomeContent";

const getStaticContent = (componentName: string) => {
  const ContentComponent = staticContents[componentName];
  // @ts-ignore
  return ContentComponent ?? <ContentComponent />;
};

const App = () => (
  <Container>
    <HashRouter>
      <Helmet />
      <Header />
      <Main>
        <Routes>
          <Route index element={<HomeContent />} />
          {TabsData.map((tabData, index) => (
            <Route
              key={index}
              path={tabData.path}
              element={
                (
                  tabData.queryData ?
                  <ContentLoader tabData={tabData} /> :
                    getStaticContent(tabData.component)
                )
              }
            />
          ))}
          <Route path="*" element={<HomeContent />} />
        </Routes>
      </Main>
    </HashRouter>
  </Container>
);

export default App;
