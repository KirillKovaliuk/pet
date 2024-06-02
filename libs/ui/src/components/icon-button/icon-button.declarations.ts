import { IButtonProps, IButtonStyles } from '../button';
import { TIconName } from '../icon';

type TExcludedMainProps = 'iconBefore' | 'iconAfter' | 'as' | 'children';

export interface IIconButtonProps extends Omit<IButtonProps, TExcludedMainProps> {
  icon: TIconName;
}

export interface IIconButtonStyles extends IButtonStyles {
  $icon?: TIconName;
}
