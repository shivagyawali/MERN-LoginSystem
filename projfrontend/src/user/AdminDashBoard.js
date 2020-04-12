import React from "react";
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper/index";
import { Link } from "react-router-dom";

const AdminDashBoard = () => {
  const {
    user: { name, email, role, password },
  } = isAutheticated();
  if (role == 1) {
    var yourRole = "admin";
  }

  const adminSide = () => {
    return (
      <div>
        <h4 className="admin center-align">Admin Profile</h4>
        <div id="profile-page" className="section">
          <div id="profile-page-header" className="card">
            <div className="card-content teal">
              <div className="row light">
                <div className="col s5 center-align">
                  <h4 className="card-title white-text text-darken-4">
                    Administrator Name
                  </h4>
                  <p className="medium-small black-text">{name}</p>
                </div>
                <div className="col s3 center-align">
                  <h4 className="card-title white-text text-darken-4">Email</h4>
                  <p className="medium-small black-text">{email}</p>
                </div>
                <div className="col s3 center-align">
                  <h4 className="card-title white-text text-darken-4">Role</h4>
                  <p className="medium-small black-text">{yourRole}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Base
      title="Welcome to admin area"
      description="Manage all of your site here"
      classNameName="container bg-success p-4"
    >
      <div>
        <div classNameName="col-5">{adminSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashBoard;
