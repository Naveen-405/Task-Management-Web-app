import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard"
import Test from "./Test";
import { Alert } from "./components/common/Alerts";

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
          <Route path="/login" element={<LoginPage setAlerts={setAlerts} />} />

          <Route
            path="/register"
            element={<Register setAlerts={setAlerts} />}
          />

          <Route path="/dashboard" element={<Dashboard />}/>

          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
