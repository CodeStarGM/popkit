import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { CookiesPopup } from "./index";

export default {
  title: "CookiesPopup",
  component: CookiesPopup,
} as Meta;

const Template: StoryFn = (args: any) => <CookiesPopup {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  title: "Cookie Policy",
  description:
    "Receive new articles and resources directly on your inbox. fill you email below to join our email newsletter today  ",
  iconImage: "https://i.ibb.co/6DQ7MPY/Component-1.png",
  open: true,
  setOpen: () => {},
  onSubmit: () => {},
  isDark: true,
  crossButton: false,
};

export const Light = Template.bind({});
Light.args = {
  title: "Cookie Policy",
  description:
    "Receive new articles and resources directly on your inbox. fill you email below to join our email newsletter today  ",
  iconImage: "https://i.ibb.co/6DQ7MPY/Component-1.png",
  open: true,
  setOpen: () => {},
  onSubmit: () => {},
  isDark: false,
  crossButton: true,
};
