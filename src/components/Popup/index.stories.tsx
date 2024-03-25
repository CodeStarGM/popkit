import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Popup } from "./index";

export default {
  title: "Popup",
  component: Popup,
} as Meta;

const Template: StoryFn = (args: any) => <Popup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Blog post published",
  description:
    "This blog post has been published. Team members will be able to edit this post and republish changes, Team members will be able to edit this post and republish changes. ",
  variant: "primary",
  open: true,
  setOpen: () => {},
  onConfirm: () => {},
};

export const Danger = Template.bind({});
Danger.args = {
  title: "Blog post published",
  description:
    "This blog post has been published. Team members will be able to edit this post and republish changes, Team members will be able to edit this post and republish changes. ",
  variant: "danger",
  open: true,
  setOpen: () => {},
  onConfirm: () => {},
};
