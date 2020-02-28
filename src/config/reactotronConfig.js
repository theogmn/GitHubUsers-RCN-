/**
 * Arquivo de debug para configurar o reactotron
 */
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();
  console.tron = tron;

  tron.clear();
}
