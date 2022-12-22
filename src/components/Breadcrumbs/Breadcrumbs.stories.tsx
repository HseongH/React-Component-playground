import { ComponentMeta, ComponentStory } from "@storybook/react";
import Breadcrumbs from ".";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

export const Template: ComponentStory<typeof Breadcrumbs> = () => {
  const steps = [{ title: "Discovery" }, { title: "Target Info", url: "/" }];

  return <Breadcrumbs steps={steps} />;
};
