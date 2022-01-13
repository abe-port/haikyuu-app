import { PlayerListing } from './index';

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docsreact/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'PlayerListing',
    component: PlayerListing,
    argTypes: {
        players: {
            name: 'players',
            type: { name: 'array', required: false },
            defaultValue: [],
            description: 'Array of players',
            table: {
                type: { summary: 'array' },
                defaultValue: { summary: '[]' },
            },
            control: {
                type: 'array'
            }
        }
    },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <PlayerListing {...args} />;

export const NoPlayers = {
    args: {
        players: []
    },
};

export const PartiallyFilledPlayers = {
    args: {
        players: [
            {
                id: 0,
                first_name: 'Hinata',
                last_name: 'Shoyo',
                number: '10',
                height: '164.2',
                age: '16',
                hasPosition: true
            },
            {
                id: 1,
                first_name: 'Kageyama',
                last_name: 'Tobio',
                number: '9',
                height: '181.9',
                age: '16',
                hasPosition: true
            },
            {
                id: 2,
                first_name: 'Sawamura',
                last_name: 'Daichi',
                number: '1',
                height: '176.7',
                age: '18',
                hasPosition: true
            },
            {
                id: 3,
                first_name: 'Sugawara',
                last_name: 'Koshi',
                number: '2',
                height: '174.6',
                age: '18',
                hasPosition: true
            }
        ]
    },
};

export const FullCourt = {
    args: {
        players: [
            {
                id: 0,
                first_name: 'Hinata',
                last_name: 'Shoyo',
                number: '10',
                height: '164.2',
                age: '16',
                hasPosition: true
            },
            {
                id: 1,
                first_name: 'Kageyama',
                last_name: 'Tobio',
                number: '9',
                height: '181.9',
                age: '16',
                hasPosition: true
            },
            {
                id: 2,
                first_name: 'Sawamura',
                last_name: 'Daichi',
                number: '1',
                height: '176.7',
                age: '18',
                hasPosition: true
            },
            {
                id: 3,
                first_name: 'Sugawara',
                last_name: 'Koshi',
                number: '2',
                height: '174.6',
                age: '18',
                hasPosition: true
            },
            {
                id: 4,
                first_name: 'Azumane',
                last_name: 'Asahi',
                number: '3',
                height: '186.4',
                age: '18',
                hasPosition: true
            },
            {
                id: 5,
                first_name: 'Nishinoya',
                last_name: 'Yu',
                number: '4',
                height: '160.5',
                age: '17',
                hasPosition: true
            },
        ]
    },
};