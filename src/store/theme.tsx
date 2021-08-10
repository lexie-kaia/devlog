import React, {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useCallback,
  useContext,
} from 'react';

type Theme = 'light' | 'dim' | 'dark';

type Value = {
  theme: Theme;
  onThemeButtonClick?: () => void;
};

type Props = {
  children: ReactNode;
};

const ThemeContext = createContext<Value>({ theme: 'light' });

export default function ThemeProvider({ children }: Props) {
  // console.log('theme provider is loading');
  const [theme, setTheme] = useState<Theme>('light');

  const changeTheme = (theme: Theme) => {
    setTheme(theme);
    window.localStorage.setItem('theme', `${theme}`);
    if (document.body.classList.length > 0) {
      document.body.classList.remove(...Array.from(document.body.classList));
    }
    document.body.classList.add(`${theme}`);
  };

  useEffect(() => {
    const getInitialColorTheme = (): Theme => {
      if (typeof window !== `undefined`) {
        const userPreference = window.localStorage.getItem(
          'theme'
        ) as null | Theme;

        if (userPreference && typeof userPreference === 'string') {
          return userPreference;
        }

        const systemPreference = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches
          ? 'dim'
          : 'light';

        if (systemPreference) {
          return systemPreference;
        }

        return 'light';
      }

      return 'light';
    };

    changeTheme(getInitialColorTheme());
  }, []);

  const onThemeButtonClick = useCallback(() => {
    switch (theme) {
      case 'light':
        changeTheme('dim');
        return;
      case 'dim':
        changeTheme('dark');
        return;
      case 'dark':
        changeTheme('light');
        return;
      default:
        changeTheme('light');
        return;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, onThemeButtonClick }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const { theme, onThemeButtonClick } = useContext(ThemeContext);

  return { theme, onThemeButtonClick };
};
