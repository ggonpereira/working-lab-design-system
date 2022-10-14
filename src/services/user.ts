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

export const signInRequest = ({ email, password }: SignInPayload) =>
  new Promise<SignInRequestResponse>((resolve, reject) => {
    if (email === mockEmail && password === mockPassword) {
      const accessToken = "nh6L2kzjQK5prw9q7V532FTNFm3ZaPKWCUq65w7";

      const user = {
        firstName: "John",
        lastName: "Doe",
        email: mockEmail,
        age: 25,
      };
      return setTimeout(() => resolve({ accessToken, user }), 250);
    }

    setTimeout(() => reject(new Error("Wrong credentials!")), 250);
  });
