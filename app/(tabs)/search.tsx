import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Search } from 'lucide-react-native';

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Search size={48} color="#6B7280" />
        <Text style={styles.title}>Search Feature</Text>
        <Text style={styles.subtitle}>Coming soon! Search for specific restaurants or cuisines.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    marginTop: 16,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
});