import Accordion from './Accordion';
import QuestionMarkIcon from './QuestionMarkIcon';
import { Meta } from '@storybook/react';
import React from 'react';

export default {
  title: 'Atoms/Accordions/Accordion',
  component: Accordion,
} as Meta;

export const AccordionDefault = () => (
  <Accordion
    mb={2}
    title="What is Flowbite?"
    content="Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more."
  />
);

export const AccordionQuestion = () => (
  <Accordion
    mb={2}
    title="What is 'Flowbite library'?"
    content="Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more."
    icon={<QuestionMarkIcon />}
  />
);

export const AccordionDark = () => (
  <Accordion
    bgColor="#111827"
    textColor="#9CA3AF"
    mb={2}
    title="What is Flowbite?"
    content="Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more."
  />
);
