import renderer, { act } from 'react-test-renderer';

import { Theme } from '../theme';

import { Button } from './button';

describe('<Button />:', () => {
  it('should render primary button component correctly', () => {
    const container = renderer
      .create(
        <Theme>
          <Button>primary label</Button>
        </Theme>,
      );

    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render primary button component with icons correctly', () => {
    const container = renderer
      .create(
        <Theme>
          <Button iconAfter="edit" iconBefore="check">primary label</Button>
        </Theme>,
      );

    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render primary fullwidth button component correctly', () => {
    const container = renderer
      .create(
        <Theme>
          <Button fullWidth>primary label</Button>
        </Theme>,
      );

    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render primary destructive button component correctly', () => {
    const container = renderer
      .create(
        <Theme>
          <Button destructive>primary label</Button>
        </Theme>,
      );

    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render secondary button component correctly', () => {
    const container = renderer
      .create(
        <Theme>
          <Button hierarchy="secondary">secondary label</Button>
        </Theme>,
      );

    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render secondary colored button component correctly', () => {
    const container = renderer
      .create(
        <Theme>
          <Button hierarchy="secondary" colored>secondary label</Button>
        </Theme>,
      );

    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render tertiary button component correctly', () => {
    const container = renderer
      .create(
        <Theme>
          <Button hierarchy="tertiary">tertiary label</Button>
        </Theme>,
      );

    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render tertiary colored button component correctly', () => {
    const container = renderer
      .create(
        <Theme>
          <Button hierarchy="tertiary" colored>tertiary label</Button>
        </Theme>,
      );

    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should trigger click event correctly', () => {
    const mockFunction = jest.fn();

    const container = renderer
      .create(
        <Theme>
          <Button
            hierarchy="tertiary"
            onClick={mockFunction}
            colored
          >
            tertiary label
          </Button>
        </Theme>,
      );

    act(() => {
      container.root.findByType('button').props.onClick();
    });

    expect(mockFunction).toHaveBeenCalled();
  });
});
