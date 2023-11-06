import { Theme, css } from '@emotion/react';

export default {
  listItem: () =>
    css({
      listStyleType: 'none',
    }),
  orderedList: () =>
    css({
      marginBlock: 0,
      paddingInline: 0,
    }),
  heading: ({ mq, spacings, fontSizes }: Theme) =>
    css({
      padding: `${spacings.DOUBLE}rem 0 ${spacings.DOUBLE}rem`,
      [mq.GROUP_3_MIN_WIDTH]: {
        ...fontSizes.doublePica,
        paddingTop: `${spacings.TRIPLE}rem`,
      },
      [mq.GROUP_4_MIN_WIDTH]: {
        paddingTop: `${spacings.DOUBLE}rem`,
      },
    }),
  headingNoContributors: ({ mq, spacings, fontSizes }: Theme) =>
    css({
      padding: `${spacings.DOUBLE}rem 0 ${spacings.DOUBLE}rem`,
      [mq.GROUP_3_MIN_WIDTH]: {
        ...fontSizes.doublePica,
        paddingTop: `${spacings.TRIPLE}rem`,
        paddingBottom: `${spacings.TRIPLE}rem`,
      },
      [mq.GROUP_4_MIN_WIDTH]: {
        paddingTop: `${spacings.DOUBLE}rem`,
      },
    }),
  subHeading: ({ mq, spacings }: Theme) =>
    css({
      paddingBottom: `${spacings.DOUBLE}rem`,
      [mq.GROUP_3_MIN_WIDTH]: {
        paddingBottom: `${spacings.TRIPLE}rem`,
      },
    }),
};
