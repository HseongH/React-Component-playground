import { ComponentMeta, ComponentStory } from "@storybook/react";
import OsIcon from ".";

export default {
  title: "Components/OsIcon",
  component: OsIcon,
} as ComponentMeta<typeof OsIcon>;

const Template: ComponentStory<typeof OsIcon> = (props) => {
  return <OsIcon {...props} />;
};

export const Suse = Template.bind({});
Suse.args = {
  imgName: "suse",
};

export const ImgNotFound = Template.bind({});
ImgNotFound.args = {
  imgName: "React",
};
