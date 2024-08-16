// App.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          index: true,
          element: <MainContainer />,
        },
        {
          path: "results",
          element: <MainContainer />, // Ensure this includes SearchResults if needed
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={appRoute} />
      </div>
    </Provider>
  );
}

export default App;
