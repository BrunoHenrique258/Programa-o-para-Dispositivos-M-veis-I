import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Um from './screens/Exercicio1';

const App: React.FC = () => {
  return (
    <>
      <StatusBar hidden={true} />  {/* oculta a StatusBar */}
      <Um />
    </>
  );
};

export default App;
