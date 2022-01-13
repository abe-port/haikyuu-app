// YourComponent.stories.js|jsx

import { VolleyballCourtTool } from './index';

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docsreact/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'VolleyballCourtTool',
    component: VolleyballCourtTool,
    argTypes: {
       
    },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <VolleyballCourtTool {...args} />;

export const Default = {
    args: {
       
    },
};
