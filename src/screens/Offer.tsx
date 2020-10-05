import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import { OfferCardProp, OfferNavParamList } from '../../types';
import { Box, OfferCard, StackHeader, theme } from '../components';
import { offerBanner } from '../data';

const { height } = Dimensions.get('window');
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    backgroundColor: theme.colors.white,
  },
});

interface OfferProps {}

const Offer = ({
  navigation,
}: StackScreenProps<OfferNavParamList, 'Offer'>) => {
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true,
  });
  return (
    <SafeAreaView style={styles.container}>
      <Box style={{ alignItems: 'center', height: height * 0.86 }}>
        <StackHeader title="Offers" back={() => navigation.goBack()} />
        <Box paddingTop="xl">
          <AnimatedFlatList
            scrollEventThrottle={16}
            bounces={false}
            {...{ onScroll }}
            showsVerticalScrollIndicator={false}
            data={offerBanner}
            keyExtractor={({ id }: OfferCardProp) => id.toString()}
            renderItem={({ item, index }: any) => (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('OfferDetail')}
              >
                <OfferCard image={item.image} y={y} index={index} />
              </TouchableWithoutFeedback>
            )}
          />
          <Box style={{ paddingBottom: 60 }} />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default Offer;
