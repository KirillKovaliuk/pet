import ArrowNarrowRightIcon from '../../assets/icons/arrow-narrow-right.svg';
import CheckIcon from '../../assets/icons/check.svg';
import EditIcon from '../../assets/icons/edit.svg';
import File04Icon from '../../assets/icons/file-04.svg';
import FileCode01Icon from '../../assets/icons/file-code-01.svg';
import FolderIcon from '../../assets/icons/folder.svg';
import PlaceholderIcon from '../../assets/icons/placeholder.svg';
import SocialsFigmaIcon from '../../assets/icons/socials/figma.svg';
import SocialsGithubIcon from '../../assets/icons/socials/github.svg';

export const ICON_SIZES = [12, 14, 16, 20, 24, 32, 40, 'content'] as const;

export const DEFAULT_SIZE = 24;

export const ICONS = {
  'socials-github': SocialsGithubIcon,
  'socials-figma': SocialsFigmaIcon,
  edit: EditIcon,
  check: CheckIcon,
  'file-04': File04Icon,
  'file-code-01': FileCode01Icon,
  folder: FolderIcon,
  placeholder: PlaceholderIcon,
  'arrow-narrow-right': ArrowNarrowRightIcon,
};
