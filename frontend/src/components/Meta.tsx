import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export const Meta: FunctionComponent<MetaProps> = ({
  title,
  description,
  keywords,
}: MetaProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To ProShop",
  description: "We sell the best products cheaply",
  keywords: "electronics, buy electronics, cheap electronics",
};
