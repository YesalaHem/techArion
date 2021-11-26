import React from "react";
import { useState } from "react";
import axios from "axios";
const baseUrl = "https://admin.srkprojects.com/web/api/client/v1/contact-us/";

const SendData = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  let { name, email, message } = user;

  const postData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitData = (e) => {
    e.preventDefault();
    axios
      .post(baseUrl, {
        name,
        email,
        message,
      })
      .then((res) => {
        setUser(user);
      });
  };
  return (
    <>
      <div className="conatiner">
        <div className="row">
          <div className="col-md-6 form-data">
            <form className="form" onSubmit={submitData}>
              <div className="form-group mb-3">
                <label htmlFor="name" name="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control "
                  required
                  placeholder="Name"
                  onChange={postData}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="name" name="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="email"
                  required
                  onChange={postData}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="name" name="name">
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  className="form-control"
                  placeholder="Message"
                  required
                  onChange={postData}
                />
              </div>
              <button className="btn btn-success btn-lg" type="submit">
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendData;
