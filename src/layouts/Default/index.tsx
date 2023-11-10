import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// actions
import { changelayoutMode } from "../../redux/actions";

// components
import SideMenu from "./SideMenu";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeMesibo } from "../../mesibo/ChatWorker";


interface IndexProps {
  children: any;
}
const Index = (props: IndexProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    initializeMesibo();
  }, []);

  /*
  call dark/light mode
  */
  const onChangeLayoutMode = (value: any) => {
    if (changelayoutMode) {
      dispatch(changelayoutMode(value));
    }
  };

  return (
    <div className="layout-wrapper d-lg-flex">
      {/* side menu */}
      <SideMenu onChangeLayoutMode={onChangeLayoutMode} />

      {props.children}
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default Index;
