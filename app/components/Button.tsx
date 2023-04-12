interface ButtonProps {
  variant?: string;
  children?: string;
  className?: string;
  icon?: JSX.Element;
}

export default function Button({
  variant = 'primary',
  children,
  icon,
  className,
}: ButtonProps) {
  return (
    <button
      className={`mx-2 my-4 rounded-md border-t-2 border-b-4 px-6 py-3 font-bold 
       tracking-wide text-neutral-100 dark:text-neutral-100 sm:transition-transform sm:duration-300 sm:hover:translate-y-0.5 
       ${
         variant === 'primary' &&
         'border-t-primary-300 border-b-primary-800 bg-primary-500 dark:bg-primary-500'
       } ${className}`}
    >
      {children}
      {icon}
    </button>
  );
}
