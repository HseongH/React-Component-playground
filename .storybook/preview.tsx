import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../src/redux/store";
import GlobalStyle from "../src/styles/GlobalStyle";

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Router>
        <GlobalStyle>
          <Story />
        </GlobalStyle>
      </Router>
    </Provider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
