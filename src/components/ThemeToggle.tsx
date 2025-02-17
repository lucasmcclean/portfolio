interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  return (
    <button
      className={
        "absolute right-6 bottom-6 w-12 h-12 cursor-pointer" +
        className
      }
      onClick={toggleTheme}
    >
    </button>
  )
}

const toggleTheme: () => void = () => {
  document.documentElement.classList.toggle('dark');
}
