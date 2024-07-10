/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store } from './src/Redux/Store';
import App from './App';
import { PaperProvider } from 'react-native-paper';

const ReduxWrap = () => {
    return (
        <Provider store={store}>
            <PaperProvider>
                <App />
            </PaperProvider>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => ReduxWrap);
