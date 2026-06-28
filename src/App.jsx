import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import Test from "./Test";
import { Alert } from "./components/common/Alerts";
import MainLayout from "./components/layout/MainLayout";

const App = () => {
  const [alerts, setAlerts] = useState(null);

  useEffect(() => {
    if (!alerts) return;

    const timer = setTimeout(() => {
      setAlerts(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [alerts]);

  return (
    <>
      {/* Global Alert */}
      <div className="fixed top-5 right-5 z-50 w-full max-w-sm">
        {alerts && (
          <Alert
            type={alerts.type}
            title={alerts.title}
            message={alerts.message}
            onDismiss={() => setAlerts(null)}
          />
        )}
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage setAlerts={setAlerts} />} />
          <Route
            path="/register"
            element={<Register setAlerts={setAlerts} />}
          />
          <Route path="/test" element={<Test />} />

          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
