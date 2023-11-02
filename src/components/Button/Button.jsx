import { FiltersButton } from './Button.styled';

export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <FiltersButton type={type} $isSelected={selected} {...otherProps}>
      {children}
    </FiltersButton>
  );
};
