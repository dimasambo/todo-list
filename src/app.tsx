import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./routes/routes.tsx";
import store, {persistor} from "./redux/redux-store.ts";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

const router = createBrowserRouter(routes);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}/>
      </PersistGate>
    </Provider>
  )
}

export default App
