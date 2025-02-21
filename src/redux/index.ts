import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from "redux-persist";
import { persistConfig }  from './rootReducer'


export const store = configureStore({
  reducer: persistConfig,
  middleware: (defaultMiddleware) => defaultMiddleware({serializableCheck: false})
})

export const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch