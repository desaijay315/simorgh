import React from 'react';
import styled from 'styled-components';

// Utilities
import useToggle from '#hooks/useToggle';

// Components
import FrontPageSection from '../../components/FrontPageSection';

// Styling
import {
  GEL_SPACING,
  GEL_SPACING_TRPL,
  GEL_SPACING_QUAD,
} from '@bbc/gel-foundations/spacings';
import { GEL_GROUP_3_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';

const createMarkup = oembed => {
  return { __html: oembed.html };
};

const StyledWrapper = styled.div`
  margin-top: ${GEL_SPACING};
  margin-bottom: ${GEL_SPACING_TRPL};

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    margin-top: ${GEL_SPACING_QUAD};
  }
`;

const USElectionBanner = ({ oembed }) => {
  const { enabled } = useToggle('us2020ElectionBanner');

  if (!enabled || !oembed) return null;

  return (
    <FrontPageSection>
      <StyledWrapper dangerouslySetInnerHTML={createMarkup(oembed)} />
    </FrontPageSection>
  );
};

export default USElectionBanner;
