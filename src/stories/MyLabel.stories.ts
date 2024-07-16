import {Meta, StoryObj} from '@storybook/react';
import {MyLabel} from '../components/MyLabel.tsx';

const meta: Meta<typeof MyLabel> = {
    title: 'Example/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        color: { control: 'inline-radio'},
    },
};

export default meta;

type Story = StoryObj<typeof MyLabel>;

export const Basic: Story = {
    args: {
        label: 'Hello World',
    },
};

export const AllCaps: Story = {
    args: {
        label: 'All Caps label',
        size: 'h1',
        allCaps: true,
        color: 'text-tertiary',
        fontColor: 'red',
    },
};

export const Secondary: Story = {
    args: {
        label: 'Secondary label',
        size: 'h1',
    },
};


export const CustomColor: Story = {
    args: {
        label: 'Custom Color label',
        size: 'h1',
    },
};

export const CustomFont: Story = {
    args: {
        label: 'Custom Font label',
        size: 'h1',
        allCaps: true,
    },
};
