import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { RouteComponentProps } from "react-router-dom";
import { Loader, Message } from "../components";
import { deleteUser, listUsers } from "../store/actions";
import { ReduxStates } from "../store/types";

interface UserListScreenProps extends RouteComponentProps {}

export const UserListScreen = ({ history }: UserListScreenProps) => {
  const dispatch = useDispatch();

  const { loading, users, error } = useSelector(
    (state: ReduxStates) => state.UserList
  );
  const { userInfo } = useSelector((state: ReduxStates) => state.UserLogin);

  const { success: deleteSuccess } = useSelector(
    (state: ReduxStates) => state.UserDelete
  );

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) dispatch(listUsers());
    else history.push("/login");
  }, [dispatch, history, userInfo, deleteSuccess]);

  const deleteHandler = (userId: string) => {
    if (window.confirm("Are you sure")) dispatch(deleteUser(userId));
  };
  return (
    <>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <i className="fas fa-check" style={{ color: "green" }} />
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }} />
                  )}
                </td>
                <td>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};
