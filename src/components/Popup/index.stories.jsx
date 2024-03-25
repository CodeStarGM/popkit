import React from "react";
import Popup from ".";

export default {
  title: "Popup",
  component: Popup,
};

const Template = (args) => <Popup {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "Blog post published",
  description:
    "This blog post has been published. Team members will be able to edit this post and republish changes.",
  open: false,
  setOpen: () => {},
  onConfirm: () => {},
};
