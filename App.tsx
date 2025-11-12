import './global.css';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from '@/navigation/Navigation';

function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <View className={'flex-1'}>
        <Navigation />
      </View>
    </SafeAreaProvider>
  );
}

export default App;
