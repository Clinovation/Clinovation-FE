// library
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import "./App.css";
import ExamplePage from "./pages/examplePage/ExamplePage";

function App() {
  return (
    // <ApolloProvider client={client}>
    <ApolloProvider>
      {/* <Provider store={store}> */}
      <Provider>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <PersistGate loading={null}>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<ExamplePage />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
