import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from ".";
import { BiAtom } from "react-icons/bi";
import Stack from "../Stack";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Variant: ComponentStory<typeof Button> = () => {
  return (
    <Stack spacing={1}>
      <Button>Button</Button>
      <Button variant="outlined">Button</Button>
      <Button variant="icon">
        <BiAtom />
      </Button>
    </Stack>
  );
};

export const Color: ComponentStory<typeof Button> = () => {
  return (
    <Stack spacing={1}>
      <Button>Button</Button>
      <Button color="success">Button</Button>
      <Button color="error">Button</Button>
    </Stack>
  );
};

export const Loading: ComponentStory<typeof Button> = () => {
  return (
    <Stack spacing={1}>
      <Button>Button</Button>
      <Button isLoading>Button</Button>
    </Stack>
  );
};

export const WithIcon: ComponentStory<typeof Button> = () => {
  return (
    <Stack spacing={1}>
      <Button startIcon={<BiAtom />}>Button</Button>
      <Button endIcon={<BiAtom />}>Button</Button>
    </Stack>
  );
};
