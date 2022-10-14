import {
  useEffect,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";
import { signInRequest } from "../services/user";
import { User, UserWithAccessToken } from "../types";
import { UseFormReset } from "react-hook-form";

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (
    signInPayload: SignInProps,
    reset: UseFormReset<any>
  ) => Promise<void>;
  logOut: () => void;
};

interface AuthProviderProps {
  children: ReactNode;
}

interface SignInProps {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserWithAccessToken | null>(null);
  const isAuthenticated = !!user;

  // using token from localStorage, if it was a real application
  // it should be a token from cookies!
  useEffect(() => {
    const storedUser = localStorage.getItem("@workingLab:user");
    if (storedUser) {
      const parsedUser: UserWithAccessToken = JSON.parse(storedUser);

      return setUser(parsedUser);
    }

    logOut();
  }, []);

  const saveUserDataToLocalStorage = (data: UserWithAccessToken) => {
    localStorage.setItem("@workingLab:user", JSON.stringify(data));
  };

  const signIn = async (
    signInPayload: SignInProps,
    reset: UseFormReset<any>
  ) => {
    // TODO: this `signInRequest` should be a real API call
    try {
      const { accessToken, user } = await signInRequest(signInPayload);

      saveUserDataToLocalStorage({ accessToken, ...user });

      // TODO: instead of an alert, should redirect to dashboard and show a Toast
      alert("Successfully signed in");
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = () => {
    setUser(null);
    // TODO: instead of a console.log, should use a Toast
    console.log("Log out");

    // TODO: here I would push the user to the login page
    // (if I had a routing system, like with React Router Dom)
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
