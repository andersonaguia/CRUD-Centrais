import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export type CustomSizesProps = {
  width: string;
  height: string;
  fontSize: string;
};

export type CommonIconProps = {
  customSize: string;
};

export type CustomFontAwesomeIconProps = Omit<
  FontAwesomeIconProps,
  'icon' | 'width' | 'height' | 'fontSize'
>;

export type IconProps = CustomFontAwesomeIconProps & CommonIconProps;
