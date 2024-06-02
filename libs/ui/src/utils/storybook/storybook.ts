import {
  IArgumentType,
  TControlArgument,
  TStoryOptions,
} from './storybook.declarations';

export class ArgumentTypeBuilder {
  control?: TControlArgument;

  options?: string[] | number[];

  description?: string;

  type: {
    required: boolean;
  };

  table: {
    type: {
      summary: string;
    },
    defaultValue: {
      summary: unknown;
    },
  };

  constructor(argumentType: IArgumentType) {
    this.control = argumentType.control;
    this.options = argumentType.options;
    this.description = argumentType.description;

    const { type, defaultValue, required } = argumentType;

    this.table = {
      type: {
        summary: '',
      },
      defaultValue: {
        summary: '-',
      },
    };

    this.type = {
      required: false,
    };

    if (type) {
      this.table.type.summary = type;
    }

    if (defaultValue || defaultValue === false) {
      this.table.defaultValue.summary = defaultValue;
    }

    if (required) {
      this.type.required = required;
    }
  }

  setControl = (value: TControlArgument) => {
    this.control = value;

    return this;
  };

  setOptions = (value: TStoryOptions) => {
    this.options = value;

    return this;
  };

  setDescription = (value: string) => {
    this.description = value;

    return this;
  };

  setType = (value: string) => {
    this.table = {
      ...this.table,
      type: {
        summary: value,
      },
    };

    return this;
  };

  setDefaultValue = (value: unknown) => {
    this.table.defaultValue.summary = value;

    return this;
  };

  setRequired = (value: boolean) => {
    this.type.required = value;
    this.table.defaultValue.summary = '-';

    return this;
  };

  addClarification = (value: string) => {
    this.description = `${this.description}\n\n *${value}\n`;

    return this;
  };

  static from = (argType: ArgumentTypeBuilder) => {
    const { control, options, description } = argType;
    const table = argType.table || {};
    const defaultValue = table.defaultValue?.summary;
    const type = table.type?.summary;
    const required = argType.type?.required;

    return new ArgumentTypeBuilder({
      control,
      options,
      description,
      defaultValue,
      type,
      required,
    });
  };
}
