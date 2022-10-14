import axios from "axios";
import { User } from "../types";

const mockEmail = "johndoe1@gmail.com";
const mockPassword = "ogS!Q4!vd26&8hDE*i65Ky&eC^";

interface SignInPayload {
  email: string;
  password: string;
}

interface SignInSuccessfulResponse {
  accessToken: string;
  user: User;
}

type SignInRequestResponse = SignInSuccessfulResponse;

export const signInRequest = async ({ email, password }: SignInPayload) => {
  const response = await axios.post("/user", { email, password });

  // instead of returning a mock value, should return the response itself

  const accessToken = "nh6L2kzjQK5prw9q7V532FTNFm3ZaPKWCUq65w7";
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: mockEmail,
    age: 25,
  };

  return { accessToken, user };
};
