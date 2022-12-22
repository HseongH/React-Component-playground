import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from ".";

export default {
  title: "Components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

export const Template: ComponentStory<typeof Input> = () => {
  return <Input placeholder="Search" />;
};
