// YourComponent.stories.js|jsx

import { Header } from './index';

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docsreact/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Header',
    component: Header,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Header {...args} />;

export const Default = {
    args: {
       
    },
};

export const EditBgColor = {
    args: {
        backgroundColor: '#cccccc'
    },
};

export const EditText = {
    args: {
        label: "Coach Ukai's Training Grounds"
    },
};
