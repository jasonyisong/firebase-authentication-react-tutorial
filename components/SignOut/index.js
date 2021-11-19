import React from 'react';
 
import { withFirebase } from '../Firebase';
 
const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Sign Out ok
  </button>
);
 
export default withFirebase(SignOutButton);

//https://gist.github.com/amitnovick/38e6af9453b0b7eaa8ef90b5d812771c
