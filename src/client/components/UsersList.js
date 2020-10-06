import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/index";

class UsersList extends Component {
  componentDidMount() {}

  renderUsers() {
    return this.props.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return <div>there is a big list of user</div>;
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, { fetchUsers })(UsersList);