import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { MapPin, Star, Clock } from 'lucide-react-native';
import { Restaurant } from '@/types/restaurant';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const getPriceDisplay = (level: number) => {
    return '$'.repeat(level);
  };

  const getPriceColor = (level: number) => {
    switch (level) {
      case 1: return '#10B981'; // Green for cheap
      case 2: return '#F59E0B'; // Yellow for moderate
      case 3: return '#EF4444'; // Red for expensive
      case 4: return '#DC2626'; // Dark red for very expensive
      default: return '#6B7280';
    }
  };

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
      <Image source={{ uri: restaurant.imageUrl }} style={styles.image} />
      
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name} numberOfLines={1}>{restaurant.name}</Text>
          <View style={styles.priceContainer}>
            <Text style={[styles.price, { color: getPriceColor(restaurant.priceLevel) }]}>
              {getPriceDisplay(restaurant.priceLevel)}
            </Text>
          </View>
        </View>

        {/* Cuisine */}
        <Text style={styles.cuisine}>{restaurant.cuisine}</Text>

        {/* Rating and Distance Row */}
        <View style={styles.infoRow}>
          <View style={styles.ratingContainer}>
            <Star size={16} color="#F59E0B" fill="#F59E0B" />
            <Text style={styles.rating}>{restaurant.rating.toFixed(1)}</Text>
          </View>
          
          <View style={styles.distanceContainer}>
            <MapPin size={16} color="#6B7280" />
            <Text style={styles.distance}>{restaurant.distance}km away</Text>
          </View>
        </View>

        {/* Address */}
        <View style={styles.addressContainer}>
          <Text style={styles.address} numberOfLines={1}>{restaurant.address}</Text>
        </View>

        {/* Quick Info */}
        <View style={styles.quickInfo}>
          <View style={styles.deliveryBadge}>
            <Clock size={12} color="#3B82F6" />
            <Text style={styles.deliveryText}>25-35 min</Text>
          </View>
          
          <Text style={styles.studentFriendly}>Student Friendly</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 160,
    backgroundColor: '#E5E7EB',
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    flex: 1,
    marginRight: 8,
  },
  priceContainer: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
  },
  cuisine: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
    fontWeight: '500',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  rating: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginLeft: 4,
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distance: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 4,
    fontWeight: '500',
  },
  addressContainer: {
    marginBottom: 12,
  },
  address: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 18,
  },
  quickInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deliveryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  deliveryText: {
    fontSize: 12,
    color: '#3B82F6',
    marginLeft: 4,
    fontWeight: '500',
  },
  studentFriendly: {
    fontSize: 12,
    color: '#10B981',
    fontWeight: '600',
  },
});