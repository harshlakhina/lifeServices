import {NavigationContainer} from "@react-navigation/native"
import StackNavigation from "./src/navigation/stack-navigation";
import { ThemeProvider } from "./src/theme/themecontext";


function App() {
  return (
     <ThemeProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}


export default App;
