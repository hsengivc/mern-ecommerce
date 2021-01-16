import React, { useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Loader, Message } from "../components";
import { getUserDetails, updateUserProfile } from "../store/actions";
import { UserUpdateActions } from "../store/enums";
import { DispatchType, ReduxStates } from "../store/types";

interface ProfileScreenProps extends RouteComponentProps {}

export const ProfileScreen = ({
  location: { search },
  history,
}: ProfileScreenProps) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const dispatch = useDispatch<DispatchType>();

  const { user, loading, error } = useSelector(
    (state: ReduxStates) => state.UserDetails
  );

  const { userInfo } = useSelector((state: ReduxStates) => state.UserLogin);

  const { success } = useSelector(
    (state: ReduxStates) => state.UserProfileUpdate
  );

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || success || !user.name) {
        dispatch({
          type: UserUpdateActions.USER_UPDATE_RESET,
        });
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [history, userInfo, dispatch, user, success]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      if (!user) return;
      dispatch(
        updateUserProfile({
          _id: user._id,
          name,
          email,
          isAdmin: user.isAdmin,
          password,
        })
      );
    }
  };
  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {error && <Message variant="danger">{error}</Message>}
        {message && <Message variant="danger">{message}</Message>}
        {success && (
          <Message variant="success">Profile Updated Successfully</Message>
        )}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="ConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  );
};
