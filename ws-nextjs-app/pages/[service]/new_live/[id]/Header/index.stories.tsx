import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { ServiceContextProvider } from '../../../../../../src/app/contexts/ServiceContext';
import { withServicesKnob } from '../../../../../../src/app/legacy/psammead/psammead-storybook-helpers/src';
import ThemeProvider from '../../../../../../src/app/components/ThemeProvider';
import Header from '.';
import { StoryProps } from '../../../../../../src/app/models/types/storybook';

interface ComponentProps extends StoryProps {
  title: string;
  description?: string;
}

const Component = ({
  service,
  variant,
  title,
  description,
}: ComponentProps) => {
  return (
    <ThemeProvider service={service} variant={variant}>
      <ServiceContextProvider service={service} variant={variant}>
        <Header title={title} description={description} />
      </ServiceContextProvider>
    </ThemeProvider>
  );
};

export default {
  title: 'New Components/LivePageHeader',
  Component,
  decorators: [withKnobs, withServicesKnob()],
};

export const TitleOnly = ({ service, variant }: StoryProps) => (
  <Component
    title="Prince Harry's hacking case against Mirror back in court"
    description=""
    service={service}
    variant={variant}
  />
);
export const TitleAndDescription = ({ service, variant }: StoryProps) => (
  <Component
    title="An kai wa jirgin kwashe yan Turkiyya hari a Sudan"
    description="Wannan shaft ne da ke kawo muku laqbarai daga sassan duniya daban-daban"
    service={service}
    variant={variant}
  />
);
