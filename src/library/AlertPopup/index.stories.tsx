import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { AlertPopup } from "./index";

export default {
  title: "Alert Popup",
  component: AlertPopup,
} as Meta;

const Template: StoryFn = (args: any) => <AlertPopup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "PopKit Integration Completed! 🎉",
  description:
    "PopKit is your go-to React library for creating stunning popups and modals, effortlessly integrate sleek and responsive popups into your React applications. 🚀 ",
  variant: "primary",
  open: true,
  isDark: false,
  setOpen: () => {},
  onConfirm: () => {},
};

export const Success = Template.bind({});
Success.args = {
  title: "Mission Accomplished! 🏆",
  description:
    "Congratulations! You've successfully completed your task. Our success popups celebrate your achievements and victories!",
  variant: "success",
  open: true,
  isDark: false,
  setOpen: () => {},
  onConfirm: () => {},
};

export const Info = Template.bind({});
Info.args = {
  title: "Stay Updated with Popkit!",
  description:
    "Keep informed with our latest updates and announcements. Stay ahead of the curve with our info popups!",
  variant: "info",
  open: true,
  isDark: false,
  setOpen: () => {},
  onConfirm: () => {},
};

export const Danger = Template.bind({});
Danger.args = {
  title: "Warning! Danger Ahead! ⚠️",
  description:
    "Proceed with caution! Our danger popups alert you to potential risks or critical information you need to know.",
  variant: "danger",
  open: true,
  isDark: false,
  setOpen: () => {},
  onConfirm: () => {},
};
