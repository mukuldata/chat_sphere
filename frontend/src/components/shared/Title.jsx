import React from "react";
import { Helmet } from "react-helmet-async";

// Component to handle title and description for multiple pages for SEO:

const Title = ({
  title = "Chat App",
  description = "This is the Chat App called Chat Sphere",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
