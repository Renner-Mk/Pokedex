import { PersistGate } from "redux-persist/integration/react";
import { Provider as ProviderRedux } from "react-redux";
import { store, persistor } from "./redux";
import { Root } from "./Root";

export function App() {
  return (
    <>
      <ProviderRedux store={store}>
        <PersistGate loading={null} persistor={persistor} />
        <Root />
      </ProviderRedux>
    </>
  );
}
