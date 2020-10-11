import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/index";
import { Helmet } from "react-helmet";

class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} users`}</title>
        <meta property="og:title" content="User App" />
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        {this.head()}
        there is a big list of user
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const loadData = (store) => {
  return store.dispatch(fetchUsers());
};

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersListPage),
};
