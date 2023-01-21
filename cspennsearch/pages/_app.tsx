import { NextUIProvider } from '@nextui-org/react';
import React, {useState, useEffect} from 'react'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
   
  return (
    // 2. Use at the root of your app
    <AnimatePresence mode="wait" initial={false}>
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
    </AnimatePresence>
  );
}

export default MyApp;