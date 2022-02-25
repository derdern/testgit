import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import HeaderTabs from './components/HeaderTabs';

export default function App() {
  return (
    <SafeAreaView>
      <HeaderTabs/>
    </SafeAreaView>
  );
}