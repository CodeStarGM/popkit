import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { SuccessPopup } from "./index";

export default {
  title: "Popup",
  component: SuccessPopup,
} as Meta;

const Template: StoryFn = (args: any) => <SuccessPopup {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Blog post published",
  description:
    "This blog post has been published. Team members will be able to edit this post and republish changes.",
  open: false,
  setOpen: () => {},
  onConfirm: () => {},
};
