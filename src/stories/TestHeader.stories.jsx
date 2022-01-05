// YourComponent.stories.js|jsx

import { TestHeader } from './TestHeader'

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docsreact/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'TestHeader',
  component: TestHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <TestHeader {...args} />;

export const FirstStory = {
  args: {
    primary: true,
    label: 'Button',
  },
};