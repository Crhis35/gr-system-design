import {
  SpacingType,
  AlignItemsType,
  FlexDirectionType,
  JustifyContentType,
} from 'lib/types/theme';
export interface StackProps {
  as?: React.ElementType;
  component?: React.ElementType;
  spacing: SpacingType;
  align: AlignItemsType;
  direction: FlexDirectionType;
  justifyContent: JustifyContentType;
  width: number;
  height: number;
  center: boolean;
  p: SpacingType;
  m: SpacingType;
  px: SpacingType;
  py: SpacingType;
  pr: SpacingType;
  pt: SpacingType;
  pb: SpacingType;
  pl: SpacingType;
  mx: SpacingType;
  my: SpacingType;
  mr: SpacingType;
  mt: SpacingType;
  mb: SpacingType;
  ml: SpacingType;
}
