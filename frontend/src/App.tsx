import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import LoginForm from "./pages/LoginPage";
import GroupsListPage from "./pages/GroupsListPage";
import { ChakraProvider } from "@chakra-ui/react";
import Register from "./pages/Registration";
import CreateGroup from "./pages/CreateGroup";
import GroupPage from "./pages/GroupPage";
import CreateRide from "./pages/CreateRide";
import JoinGroup from "./pages/JoinGroup";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import { NavConstants } from "./NavigationConstants";
import { useEffect } from "react";
import extendedTheme from "./theme/style";
import Fonts from "./theme/components/font";
import ProductPage from "./pages/ProductPage";

export const App = () => {
  const [user] = useAuthState(auth);

  return (
    <ChakraProvider theme={extendedTheme}>
      <Fonts />
      <Router>
        {user ? (
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<GroupsListPage />} />
            <Route path="/group/new" element={<CreateGroup />} />
            <Route path="/group/:groupId" element={<GroupPage />} />
            <Route path="/group/:groupId/join" element={<JoinGroup />} />
            <Route path="/register" element={<Register />} />
            <Route path="/group/:groupId/ride/new" element={<CreateRide />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/group/:groupId/join" element={<JoinGroup />} />
            <Route
              path="*"
              element={<Redirect to={NavConstants.PRODUCT_PAGE} />}
            />
          </Routes>
        )}
      </Router>
    </ChakraProvider>
  );
};

const Redirect = ({ to }: { to: string }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  }, []);

  return <></>;
};
