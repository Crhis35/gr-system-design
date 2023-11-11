import { StylesConfig } from 'react-select';
import { SelectItemOption } from './select.model';

export const getVariants = <T,>() => {
  const baseSelectStyle: StylesConfig<SelectItemOption<T>> = {
    control: styles => ({ ...styles, width: '100%' }),
  };

  return {
    primary: baseSelectStyle,
  };
};
