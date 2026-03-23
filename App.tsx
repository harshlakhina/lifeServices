import RootNavigation from './src/navigation/root-navigation';
import { store } from './src/redux';
import { ThemeProvider } from './src/theme/themecontext';
import { Provider } from 'react-redux';

function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
