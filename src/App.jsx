import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Login from "./components/Login";
import Body from "./components/Body";
import Connections from "./components/Connections";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Body />
              </ProtectedRoute>
            }
          >
            <Route index element={<Feed />} />
            <Route path="profile" element={<Profile />} />
            <Route path="feed" element={<Feed />} />
            <Route path="connections" element={<Connections />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
