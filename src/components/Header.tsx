"use client";

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <header className="sticky top-0 bg-white dark:bg-background opacity-80 z-10 py-2 flex justify-between items-center">
      <h1 className="text-3xl font-bold mb-2">Cinescope</h1>
      <button onClick={toggleTheme} className="p-2">
        {isDarkMode ? (
          <span role="img" aria-label="Light Mode">
            ☀️
          </span>
        ) : (
          <span role="img" aria-label="Dark Mode">
            🌙
          </span>
        )}
      </button>
    </header>
  );
};

export default Header;
