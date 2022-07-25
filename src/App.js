import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DefauLayout from "~/component/Layout/DefaultLayout/DefaultLayout";
import LayoutServices from "./component/Layout/LayoutServices/LayoutServices";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefauLayout />} />
        <Route path="/service" element={<LayoutServices />} />
      </Routes>
    </Router>
  );
}

export default App;
