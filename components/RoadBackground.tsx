// RoadBackground.tsx
import React from 'react';
import { View } from 'react-native';
import { gameStyles } from '../styles/GameStyles';

const RoadBackground: React.FC = () => {
  return (
    <View style={gameStyles.road}>
      <View style={gameStyles.lane} />
      <View style={[gameStyles.lane, { marginHorizontal: 20 }]} />
      <View style={gameStyles.lane} />
    </View>
  );
};

export default RoadBackground;
