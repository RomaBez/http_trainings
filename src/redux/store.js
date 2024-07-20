import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import balanceReducer from "./balanceSlice";
import localeReducer from "./localeSlice";

const balancePersistConfig = {
  key: "balance",
  storage,
};

const persistedBalanceReducer = persistReducer(
  balancePersistConfig,
  balanceReducer
);

const persistedLocaleReducer = persistReducer(
  {
    key: "locale",
    storage,
  },
  localeReducer
);

const initialState = {
  balance: {
    value: 0,
  },
  locale: {
    lang: "uk",
  },
};

export const store = configureStore({
  reducer: {
    balance: persistedBalanceReducer,
    locale: persistedLocaleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "locale/changeLang":
//       return {
//         ...state,
//         locale: {
//           lang: action.payload,
//         },
//       };

//     case "balance/deposit":
//       return {
//         ...state,
//         balance: {
//           value: state.balance.value + action.payload,
//         },
//       };

//     case "balance/withdraw":
//       return {
//         ...state,
//         balance: {
//           value: state.balance.value - action.payload,
//         },
//       };

//     case "balance/reset":
//       return {
//         ...state,
//         balance: {
//           value: 0,
//         },
//       };

//     default:
//       return state;
//   }
// };
