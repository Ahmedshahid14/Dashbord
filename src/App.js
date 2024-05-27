import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import TrafficReport from "./pages/TrafficReport";
import AttackReport from "./pages/AttackReport";
import BlockManager from "./pages/BlockManager";
import NotFound from "./pages/NotFound"; 
import WhiteListPage from "./Components/WhiteListPage";
import FastnetmonSetting from "./pages/FastnetmonSetting";
import ConfigView from "./pages/ConfigView";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/customers"
          element={
            <Layout>
              <Customers />
            </Layout>
          }
        />
        <Route
          path="/traffic-report"
          element={
            <Layout>
              <TrafficReport />
            </Layout>
          }
        />
        <Route
          path="/attack-report"
          element={
            <Layout>
              <AttackReport />
            </Layout>
          }
        />
        <Route
          path="/block-manager"
          element={
            <Layout>
              <BlockManager />
            </Layout>
          }
        />
        <Route
          path="/whitelist"
          element={
            <Layout>
              <WhiteListPage />
            </Layout>
          }
        />
        <Route
          path="/settings"
          element={
            <Layout>
              <FastnetmonSetting />
            </Layout>
          }
        />
        <Route
          path="/Config-View"
          element={
            <Layout>
              <ConfigView />
            </Layout>
          }
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </Router>
  );
}

export default App;
