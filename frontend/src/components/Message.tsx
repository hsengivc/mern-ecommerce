import React from "react";
import { FunctionComponent } from "react";
import { Alert } from "react-bootstrap";

interface MessageProps {
  children: React.ReactNode;
  variant?: string;
}

export const Message: FunctionComponent<MessageProps> = ({
  children,
  variant,
}: MessageProps) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};
