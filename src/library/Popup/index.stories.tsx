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
  title: "Mission accomplished! ",
  description:
    "Astronauts landed on the moon successfully. Stay tuned as our team delves into the historic lunar landing achievements. ",
  buttonColor: "DC6803",
  open: true,
  img: "https://img.freepik.com/premium-photo/ai-enhances-our-understanding-cosmos-by-analyzing-vast-amounts-data-collected-by-telescopes-probes-generated-by-ai_727385-1872.jpg?w=900",
};

export const Product = Template.bind({});
Product.args = {
  title: "Product Uploaded! ",
  description:
    "The New Iphone Product is uploaded and is live now, your team can edit and update the product",

  img: "https://i0.wp.com/gizmologi.com/wp-content/uploads/2017/03/iPhone-7-Product-RED.jpg?fit=954%2C643&ssl=1",
  open: true,
  buttonColor: "d01313",
};
