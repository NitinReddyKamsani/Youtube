import React from "react";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResults from "./components/SearchResults";

const App = () => {

  const appRouter = createBrowserRouter([{
    path : "/",
    element : (
    <div>
      <Head />
      <Body />
    </div> 
    ),
    children : [
    {
      path : "/",
      element : <MainContainer />

    },
    {
      path : "/watch",
      element : <WatchPage />
    },
    {
      path : "/search",
      element : <SearchResults />
    }
    ]
  }])

  return (
    <Provider store={store} >
    <div>
      
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  )
};

export default App;
