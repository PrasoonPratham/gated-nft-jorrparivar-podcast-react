import { ThirdwebProvider } from '@3rdweb/react';
import '../styles/globals.css'
import 'regenerator-runtime/runtime';

const supportedChainIds = [1, 4, 137];
const connectors = {
    injected: {}
};

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <ThirdwebProvider
                connectors={connectors}
                supportedChainIds={supportedChainIds}
            >
                <Component {...pageProps} />
            </ThirdwebProvider>
        </>
    );
};

export default MyApp;