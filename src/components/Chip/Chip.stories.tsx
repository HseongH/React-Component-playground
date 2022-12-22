import { ComponentMeta, ComponentStory } from "@storybook/react";
import Chip from ".";

export default {
  title: "Components/Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;

export const Status: ComponentStory<typeof Chip> = () => {
  return (
    <>
      <Chip>Primary</Chip>
      <Chip status="success">Success</Chip>
      <Chip status="error">Error</Chip>
    </>
  );
};

export const WithIcon: ComponentStory<typeof Chip> = () => {
  return (
    <>
      <Chip withIcon>Primary</Chip>
      <Chip status="success" withIcon>
        Success
      </Chip>
      <Chip status="error" withIcon>
        Error
      </Chip>
    </>
  );
};
