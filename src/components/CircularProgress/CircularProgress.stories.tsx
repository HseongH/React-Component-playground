import { ComponentMeta, ComponentStory } from "@storybook/react";
import CircularProgress from ".";

export default {
  title: "Components/CircularProgress",
  component: CircularProgress,
} as ComponentMeta<typeof CircularProgress>;

export const Color: ComponentStory<typeof CircularProgress> = () => {
  return (
    <>
      <CircularProgress />
      <CircularProgress color="primary" />
      <CircularProgress color="success" />
      <CircularProgress color="error" />
    </>
  );
};

export const Size: ComponentStory<typeof CircularProgress> = () => {
  return (
    <>
      <CircularProgress size={50} />
      <CircularProgress />
      <CircularProgress size={30} />
      <CircularProgress size={18} />
    </>
  );
};
