import { Provider } from "react-redux";
import { store, persistor } from "./redux";
import { PersistGate } from "redux-persist/integration/react";
import { Root } from "./Root";

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} />
      <Root />
    </Provider>
  );
}
