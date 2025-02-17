import { ChangeEvent } from 'react';
import { Services, Variants } from '#app/models/types/global';

// Disabled due to known bug in ts-lint: https://github.com/typescript-eslint/tslint-to-eslint-config/issues/856
// eslint-disable-next-line no-shadow
export enum InvalidMessageCodes {
  FieldRequired = 'validationRequired',
  WrongEmailFormat = 'validationInvalidEmail',
  WrongTelFormat = 'validationInvalidTelephone',
}

export type OnChangeInputName = ChangeEvent<HTMLInputElement>['target']['name'];

export type OnChangeInputValue =
  | ChangeEvent<HTMLInputElement>['target']['value']
  | FileList
  | File
  | boolean;

export type OnChangeHandler = (
  name: OnChangeInputName,
  value: OnChangeInputValue,
) => void;

export type InputProps = {
  id: string;
  name: string;
  handleChange: (name: OnChangeInputName, value: OnChangeInputValue) => void;
  inputState: FieldData;
  describedBy: string;
};

export type InvalidMessageBoxProps = {
  id: string;
  messageCode: InvalidMessageCodes | null;
};

export type FetchParameters = {
  id: string;
  service: Services;
  variant?: Variants;
};

type Section = {
  sectionText: {
    title: string;
  };
  fields: Field[];
};

export type HtmlType =
  | 'checkbox'
  | 'radiobutton'
  | 'select'
  | 'email'
  | 'text'
  | 'tel'
  | 'phone'
  | 'date'
  | 'time'
  | 'number'
  | 'url'
  | 'textarea'
  | 'file'
  | '';

export type Field = {
  id: string;
  type: string;
  validation: {
    min?: number;
    max?: number;
    fileTypes?: string[];
    mandatory?: boolean;
  };
  htmlType: HtmlType;
  label: string;
  description: string;
  textArea?: boolean;
};

export type FieldData = {
  isValid: boolean;
  required: boolean;
  value: OnChangeInputValue;
  htmlType: HtmlType;
  messageCode: InvalidMessageCodes | null;
};

export type PageProps = {
  pageData: {
    title: string;
    description: string;
    sections: Section[];
  };
};
