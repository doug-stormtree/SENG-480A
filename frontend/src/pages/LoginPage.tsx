import React, { useState, useEffect } from "react";
import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import { signInWithGoogle, auth, loginWithEmailAndPassword } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "./Header";

export default function Login() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  // If the user is signed in, go to the home page.
  useEffect(() => {
    if (loading) return;
    if (user) return navigate("/");
  }, [user, loading]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = () => {
    loginWithEmailAndPassword(email, password);
  };

  return (
    <Flex
      width="full"
      align="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Header />
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <input
            type="email"
            placeholder="test@test.com"
            onChange={(event) => setEmail(event.currentTarget.value)}
          />

          <input
            type="password"
            placeholder="*******"
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
          <Button width="full" mt={4} onClick={handleEmailLogin}>
            Sign In
          </Button>
          <Button width="full" mt={4} onClick={signInWithGoogle}>
            Sign In With Google
          </Button>
          <div>
            Need an account? <Link to="/register">Register</Link> now.
          </div>
        </Box>
      </Box>
    </Flex>
  );
}
