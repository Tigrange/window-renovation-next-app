import "../styles/globals.css";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "@/redux/reducer";

import Layout from "@/components/Layout";

const store = createStore(reducer);

function MyApp({ Component, pageProps }) {


  return (
    <Provider store={store}>
        <Layout >
          <Component {...pageProps} />
        </Layout>
    </Provider>
  );
}

export default MyApp;
