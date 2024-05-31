import {} from '@material-tailwind/react';

type EventCapture = {
  onPointerEnterCapture?: unknown;
  onPointerLeaveCapture?: unknown;
};

declare module '@material-tailwind/react' {
  export interface AccordionProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface AccordionHeaderProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface AvatarProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface ButtonProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface CardProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface CheckboxProps extends EventCapture {
    crossOrigin?: unknown;
  }
  export interface CardHeaderProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface CardBodyProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface IconButtonProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface InputProps extends EventCapture {
    crossOrigin?: unknown;
  }
  export interface MenuListProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface MenuItemProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface RadioProps extends EventCapture {
    crossOrigin?: unknown;
  }
  export interface NavbarProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface SelectProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface TypographyProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface TextareaProps extends EventCapture {
    placeholder?: unknown;
  }
};