import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text";
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    children: "Create Account",
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="flex items-center gap-2">
        {Story()}
        <Text size="sm">Remember me for 30 days</Text>
      </div>
    ),
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
