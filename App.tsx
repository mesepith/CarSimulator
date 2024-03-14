import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import GameEngineApp from './components/GameEngine';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <GameEngineApp />
      </SafeAreaView>
    </>
  );
};

export default App;
