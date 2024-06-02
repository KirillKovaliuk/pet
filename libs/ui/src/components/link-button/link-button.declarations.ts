import { IButtonProps } from '../button';

type TExcludedMainProps = 'hierarchy' | 'as';

export interface ILinkButtonProps extends Omit<IButtonProps, TExcludedMainProps> {
  to: string;
}
