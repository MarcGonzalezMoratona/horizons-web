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
      className={`font-bold tracking-wider px-6 py-3 mx-2 my-4 rounded-md  text-neutral-100 
       dark:text-neutral-100 border-t-2 border-b-4 sm:hover:translate-y-0.5 sm:transition-transform sm:duration-300 
       ${
         variant === 'primary' &&
         'bg-primary-500 border-t-primary-300 border-b-primary-800 dark:bg-primary-500'
       } ${className}`}
    >
      {children}
      {icon}
    </button>
  );
}
