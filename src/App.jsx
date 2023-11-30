import { useState } from 'react';
import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';
import TheMain from './components/TheMain';

export function App() {
  return (
    <>
      <TheHeader />
      <TheMain />
      <TheFooter />
    </>
  );
}

export default App;
