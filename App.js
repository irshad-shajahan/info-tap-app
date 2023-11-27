import { SafeAreaView, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import {store} from './redux/store.js'
import safeHeight from "./components/safeHeight.js";
import StackNavigator from "./StackNavigator.js";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={safeHeight.AndroidSafeArea}>
      <StackNavigator/>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
