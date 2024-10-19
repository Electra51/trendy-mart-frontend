import React from "react";
import { Helmet } from "react-helmet";

const HelmetComponent = ({ title, description, author, keyword }) => {
  return (
    <Helmet>
      <meta charSet="uft-8" />
      <meta name="description" content={description} />
      <meta name="keyword" content={keyword} />
      <meta name="author" content={author} />
      <title>{title}</title>
    </Helmet>
  );
};

export default HelmetComponent;
