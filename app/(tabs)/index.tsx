import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import RestaurantCard from '@/components/RestaurantCard';
import SortControls from '@/components/SortControls';
import { mockRestaurants } from '@/data/mockData';
import { Restaurant, SortOption } from '@/types/restaurant';

export default function RestaurantsScreen() {
  const [sortBy, setSortBy] = useState<SortOption>('rating');

  const sortedRestaurants = useMemo(() => {
    const sorted = [...mockRestaurants];
    
    if (sortBy === 'price') {
      return sorted.sort((a, b) => a.priceLevel - b.priceLevel);
    } else {
      return sorted.sort((a, b) => b.rating - a.rating);
    }
  }, [sortBy]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Campus Eats</Text>
          <Text style={styles.subtitle}>Find great food nearby</Text>
        </View>
      </View>

      {/* Location Info */}
      <View style={styles.locationBanner}>
        <Text style={styles.locationText}>📍 Near University Campus</Text>
        <Text style={styles.locationSubtext}>Showing {mockRestaurants.length} restaurants within 2km</Text>
      </View>

      {/* Sort Controls */}
      <SortControls currentSort={sortBy} onSortChange={setSortBy} />

      {/* Restaurant List */}
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {sortedRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
        
        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '400',
  },
  locationBanner: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  locationText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E40AF',
    marginBottom: 2,
  },
  locationSubtext: {
    fontSize: 12,
    color: '#6B7280',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 8,
  },
  bottomPadding: {
    height: 20,
  },
});