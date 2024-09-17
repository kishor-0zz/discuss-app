import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const Provider = ({children}) => {
    return (
        <SessionProvider>
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </SessionProvider>
    );
};

export default Provider;