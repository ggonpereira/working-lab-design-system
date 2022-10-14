import { AuthProvider } from "./contexts/AuthContext";
import { SignIn } from "./pages/SignIn";
import "./styles/global.css";

const App = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
    </>
  );
};

export default App;
