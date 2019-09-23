import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { users } from '../../static/data';

export const UserContext = React.createContext();

const UserProvider = props => {
  const [user, setUser] = useState(null);
  const [userError, setUserError] = useState(null);
  const [userLoading, setUserLoading] = useState(false);

  const loginUser = (name, password) => {
    setUserLoading(true);
    const memberCheck = users.filter(member => name === member.username && password === member.password);
    if (!memberCheck.length) {
      setUserError('Oops.  No member found matching those credentials.');
    } else {
      setUser(memberCheck[0]);
    }
    setUserLoading(false);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loginUser,
        userLoading,
        userError,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default UserProvider;
