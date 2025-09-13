import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { TrendingUp, DollarSign } from 'lucide-react-native';
import { SortOption } from '@/types/restaurant';

interface SortControlsProps {
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export default function SortControls({ currentSort, onSortChange }: SortControlsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sort by:</Text>
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[
            styles.sortButton,
            currentSort === 'rating' && styles.activeSortButton
          ]}
          onPress={() => onSortChange('rating')}
          activeOpacity={0.7}
        >
          <TrendingUp 
            size={16} 
            color={currentSort === 'rating' ? '#FFFFFF' : '#6B7280'} 
          />
          <Text style={[
            styles.sortButtonText,
            currentSort === 'rating' && styles.activeSortButtonText
          ]}>
            Rating
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.sortButton,
            currentSort === 'price' && styles.activeSortButton
          ]}
          onPress={() => onSortChange('price')}
          activeOpacity={0.7}
        >
          <DollarSign 
            size={16} 
            color={currentSort === 'price' ? '#FFFFFF' : '#6B7280'} 
          />
          <Text style={[
            styles.sortButtonText,
            currentSort === 'price' && styles.activeSortButtonText
          ]}>
            Price
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginRight: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  activeSortButton: {
    backgroundColor: '#3B82F6',
    borderColor: '#3B82F6',
  },
  sortButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    marginLeft: 6,
  },
  activeSortButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});