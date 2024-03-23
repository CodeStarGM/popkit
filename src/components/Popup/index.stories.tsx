import type { Meta, StoryFn } from "@storybook/react";
import { Popup } from "./index";

export default {
  title: "Popup",
  component: Popup,
} as Meta;

const Template: StoryFn = (args: any) => <Popup {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "Blog post published",
  description:
    "This blog post has been published. Team members will be able to edit this post and republish changes.",
  open: false,
  setOpen: () => {},
  onConfirm: () => {},
};
