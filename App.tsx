import 'react-native-gesture-handler';
import { Platform, StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={'light'} />
        <StatusBar backgroundColor="#141414"/>
      </SafeAreaProvider>
    );
  }
}
