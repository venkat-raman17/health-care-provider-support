import React, { useEffect } from "react";

// scss
import "./assets/scss/theme.scss";

// actions
import { useSelector, useDispatch } from "react-redux";
import { changelayoutMode } from "./redux/actions";

//Route
import Routes from "./routes";

// Import Firebase Configuration file
// import { initFirebaseBackend } from "./helpers/firebase_helper";

// api config
// import config from "./config";
import fakeBackend from "./helpers/fakeBackend";
import { createSelector } from "reselect";

// TODO
fakeBackend();

// const firebaseConfig = {
//   apiKey: config.FIRE_BASE.API_KEY,
//   authDomain: config.FIRE_BASE.AUTH_DOMAIN,
//   databaseURL: config.FIRE_BASE.DATABASEURL,
//   projectId: config.FIRE_BASE.PROJECTID,
//   storageBucket: config.FIRE_BASE.STORAGEBUCKET,
//   messagingSenderId: config.FIRE_BASE.MESSAGINGSENDERID,
//   appId: config.FIRE_BASE.APPID,
//   measurementId: config.FIRE_BASE.MEASUREMENTID,
// };

// // init firebase backend
// initFirebaseBackend(firebaseConfig);

const App = () => {
  document.title = "Support | Connect with Health Care Provider"

  const dispatch = useDispatch();

  // const { layoutMode } = useSelector((state: any) => ({
  //   layoutMode: state.Layout.layoutMode,
  // }));

  const errorData = createSelector(
    (state : any) => state.Layout,
    (state) => ({
      layoutMode: state.layoutMode,
    })
  );
  // Inside your component
  const { layoutMode } = useSelector(errorData);

  // Dark/Light Mode 
  useEffect(() => {
    var getLayoutMode = localStorage.getItem("layoutMode");
    if (getLayoutMode) {
      dispatch(changelayoutMode(getLayoutMode));
    } else {
      dispatch(changelayoutMode(layoutMode));
    }
  }, [layoutMode, dispatch]);

  return <Routes />;
};

export default App;
