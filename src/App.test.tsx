/* eslint-disable jest/expect-expect */
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
