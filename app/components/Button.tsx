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
      className={`font-bold tracking-wider px-6 py-3 mx-2 my-4 rounded-md bg-${variant}-500 text-neutral-100 
      dark:bg-${variant}-500 dark:text-neutral-100 border-t-2 border-b-4 border-t-${variant}-300 border-b-${variant}-800 
      hover:translate-y-0.5 transition-transform duration-300 ${className}`}
    >
      {children}
      {icon}
    </button>
  );
}
