'use client'

import { Provider } from "react-redux";
import store from "@/config/redux/store";
import type { PropsWithChildren } from "react";

const ReduxProvider = ({
  children,
}: PropsWithChildren) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ReduxProvider;