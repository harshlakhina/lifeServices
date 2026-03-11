import RootNavigation from './src/navigation/root-navigation';
import { ThemeProvider } from './src/theme/themecontext';

function App() {
  return (
    <ThemeProvider>
      <RootNavigation />
    </ThemeProvider>
  );
}

export default App;
