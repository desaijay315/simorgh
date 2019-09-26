import { buildArticleATIParams, buildArticleATIUrl } from './buildParams';
import {
  getPublishedDatetime,
  getCurrentTime,
} from '../../../../lib/analyticsUtils';

jest.mock('../../../../lib/analyticsUtils', () => {
  const utils = jest.requireActual('../../../../lib/analyticsUtils');

  return {
    ...utils,
    getPublishedDatetime: jest.fn(),
    getCurrentTime: jest.fn(),
  };
});

getCurrentTime.mockImplementation(() => '00:00:00');
getPublishedDatetime.mockImplementation(() => 'getPublishedDatetime');

const requestContext = {
  platform: 'platform',
  isUK: 'isUK',
  statsDestination: 'isUK',
  previousPath: 'previousPath',
  origin: 'origin',
};

const serviceContext = {
  atiAnalyticsAppName: 'atiAnalyticsAppName',
  atiAnalyticsProducerId: 'atiAnalyticsProducerId',
  service: 'service',
};

const validURLParams = {
  appName: serviceContext.atiAnalyticsAppName,
  contentId: 'urn:bbc:optimo://www.bbc.co.uk',
  contentType: 'article',
  language: 'language',
  ldpThingIds: 'thing+id+1~thing+id+2',
  ldpThingLabels: 'thing+label+1~thing+label+2',
  pageIdentifier: 'service.articles.//www.bbc.co.uk.page',
  pageTitle: 'pageTitle',
  producerId: serviceContext.atiAnalyticsProducerId,
  timePublished: getPublishedDatetime(),
  timeUpdated: getPublishedDatetime(),
  service: 'service',
  ...requestContext,
};

const article = {
  metadata: {
    analyticsLabels: {
      counterName: 'service.page',
    },
    locators: {
      optimoUrn: 'http://www.bbc.co.uk',
    },
    passport: {
      language: 'language',
    },
    tags: {
      about: [
        {
          thingId: 'thing id 1',
          thingLabel: 'thing label 1',
        },
        {
          thingId: 'thing id 2',
          thingLabel: 'thing label 2',
        },
      ],
    },
    title: 'title',
  },
  promo: {
    headlines: {
      seoHeadline: 'pageTitle',
    },
  },
};

describe('buildParams', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('buildArticleATIParams', () => {
    it('should return the right object', () => {
      const result = buildArticleATIParams(
        article,
        requestContext,
        serviceContext,
      );
      expect(result).toEqual(validURLParams);
    });
  });

  describe('buildArticleATIUrl', () => {
    it('should return the right url', () => {
      const result = buildArticleATIUrl(
        article,
        requestContext,
        serviceContext,
      );
      expect(result).toEqual(
        's=598285&s2=atiAnalyticsProducerId&p=service.articles.//www.bbc.co.uk.page&r=0x0x24x24&re=1024x768&hl=00:00:00&lng=en-US&x1=[urn:bbc:optimo://www.bbc.co.uk]&x2=[responsive]&x3=[atiAnalyticsAppName]&x4=[language]&x5=[http://localhost/]&x6=[originpreviousPath]&x7=[article]&x9=[pageTitle]&x11=[getPublishedDatetime]&x12=[getPublishedDatetime]&x13=[thing+label+1~thing+label+2]&x14=[thing+id+1~thing+id+2]',
      );
    });
  });
});
