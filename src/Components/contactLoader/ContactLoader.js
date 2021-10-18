import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { LoaderWrapper } from "./ContactLoaderStyled";

const ContactLoader = () => {
  return (
    <LoaderWrapper>
      <Loader type="Grid" color="#03e9f4" height={100} width={100} />
    </LoaderWrapper>
  );
};

export default ContactLoader;
