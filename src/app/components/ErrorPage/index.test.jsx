import React from 'react';
import { latin, arabic } from '@bbc/gel-foundations/scripts';
import { shouldMatchSnapshot } from '../../helpers/tests/testHelpers';
import ErrorMain from './index';

describe('ErrorMain', () => {
  const messaging = {
    statusCode: 'StatusCode',
    title: 'A error has occured',
    message: 'Something happened, please try an option',
    solutions: ['Option one', 'Option two'],
    callToActionFirst: 'You can do ',
    callToActionLinkText: 'this',
    callToActionLinkUrl: 'https://www.bbc.com',
    callToActionLast: ' thing',
  };

  shouldMatchSnapshot(
    'should correctly render for an error page for News',
    <ErrorMain {...messaging} script={latin} />,
  );

  shouldMatchSnapshot(
    'should correctly render for an error page for Persian',
    <ErrorMain {...messaging} script={arabic} />,
  );
});
