import { Meta, StoryObj } from "@storybook/react";
import { SignIn } from "./SignIn";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { AuthProvider } from "../../contexts/AuthContext";
import { rest } from "msw";

const MyComponentWithProvider = () => (
  <AuthProvider>
    <SignIn />
  </AuthProvider>
);

export default {
  title: "Pages/SignIn",
  component: MyComponentWithProvider,
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/user", (req, res, ctx) => {
          const accessToken = "nh6L2kzjQK5prw9q7V532FTNFm3ZaPKWCUq65w7";
          const user = {
            firstName: "John",
            lastName: "Doe",
            email: "johndoe1@gmail.com",
            age: 25,
          };

          return res(
            ctx.json({
              accessToken,
              user,
            })
          );
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByRole("textbox", {
      name: /email address/i,
    });
    const passwordInput = canvas.getByLabelText(/your password/i);

    userEvent.type(emailInput, "johndoe1@gmail.com");
    userEvent.type(passwordInput, "ogS!Q4!vd26&8hDE*i65Ky&eC^");

    userEvent.click(canvas.getByRole("button"));

    await waitFor(
      () => expect(canvas.getByText(/signed in/i)).toBeInTheDocument(),
      {
        timeout: 1000,
      }
    );
  },
};
