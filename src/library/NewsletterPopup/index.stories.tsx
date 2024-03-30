import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { NewsletterPopup } from "./index";

export default {
  title: "NewsletterPopup",
  component: NewsletterPopup,
} as Meta;

const Template: StoryFn = (args: any) => <NewsletterPopup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Subscribe to our newsletter ",
  description:
    "Receive new articles and resources directly on your inbox. fill you email below to join our email newsletter today  ",
  buttonColor: "4A3AFF",
  open: true,
  isDark: true,
  iconImage: "https://i.ibb.co/LCQvnrL/Group-37333.png",
  setOpen: () => {},
  onSubmit: () => {},
};
