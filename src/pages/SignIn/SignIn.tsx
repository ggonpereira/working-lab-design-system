import { Envelope, Lock } from "phosphor-react";
import { React } from "../../assets/icons";
import { Button } from "../../components/Button";
import { Checkbox } from "../../components/Checkbox";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";
import { useAuthContext } from "../../contexts/AuthContext";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  email: string;
  password: string;
}

export const SignIn = () => {
  const { signIn } = useAuthContext();
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    signIn(data, reset);
  };

  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center">
      <main>
        <header className="flex items-center flex-col gap-3">
          <React />
          <Heading asChild size="lg">
            <h1 className="font-bold">Working Lab</h1>
          </Heading>
          <Text asChild size="lg">
            <span className="text-gray-400">Login and start using!</span>
          </Text>
        </header>
        <form
          className="w-[400px] my-8 flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-3 flex-col">
            <Text asChild>
              <label htmlFor="email" className="font-semibold">
                Email address
              </label>
            </Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input
                placeholder="johndoe@example.com"
                id="email"
                {...register("email", {
                  required: true,
                })}
              />
            </TextInput.Root>
          </div>

          <div className="flex gap-3 flex-col">
            <Text asChild>
              <label htmlFor="password" className="font-semibold">
                Your password
              </label>
            </Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input
                placeholder="****************"
                id="password"
                type="password"
                {...register("password", {
                  required: true,
                })}
              />
            </TextInput.Root>
          </div>

          <div className="flex gap-2 items-center">
            <Checkbox />
            <Text asChild size="sm">
              <span className="text-gray-200">Remember me for 30 days</span>
            </Text>
          </div>

          <div className="mt-4">
            <Button type="submit">Enter platform</Button>
          </div>
        </form>

        <footer className="flex flex-col gap-4 items-center">
          <Text asChild size="sm">
            <a
              className="text-gray-400 text-center underline cursor-pointer hover:text-gray-200 transition-colors"
              href="/forgot-password"
            >
              Forgot your password?
            </a>
          </Text>
          <Text asChild size="sm">
            <a
              className="text-gray-400 text-center underline cursor-pointer hover:text-gray-200 transition-colors"
              href="/register"
            >
              Don’t have an account? Create one now!
            </a>
          </Text>
        </footer>
      </main>
    </div>
  );
};
