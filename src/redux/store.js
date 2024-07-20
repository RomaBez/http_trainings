import { configureStore } from "@reduxjs/toolkit";
import { balanceReducer } from "./balanceSlice";
import { localeReducer } from "./localeSlice";
import { act } from "react";

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
    balance: balanceReducer,
    locale: localeReducer,
  },
});

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
