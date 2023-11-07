import React from 'react';
import {
  AsianGamesFootballProps,
  FlourishStoryFixture,
  FlourishVisualisationFixture,
} from './fixtures';
import FlourishEmbed from '.';

export default {
  title: 'Components/Embeds/Flourish Embed',
  component: FlourishEmbed,
};

export const FlourishResponsiveHeight = () => (
  <FlourishEmbed {...AsianGamesFootballProps} />
);

export const FlourishStory = () => <FlourishEmbed {...FlourishStory} />;

export const FlourishVisualisation = () => (
  <FlourishEmbed {...FlourishVisualisation} />
);
