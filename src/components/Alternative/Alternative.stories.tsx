import { ComponentMeta, ComponentStory } from "@storybook/react";
import Alternative from ".";

export default {
  title: "Components/Alternative",
  component: Alternative,
} as ComponentMeta<typeof Alternative>;

export const Template: ComponentStory<typeof Alternative> = () => {
  return <Alternative message="표시할 데이터가 없습니다..." />;
};
