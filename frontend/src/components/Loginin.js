import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";

const Loginin = () => {
  const loginform = {
    email: "",
    password: "",
  };

  const logininSubmit = (formdata) => {
    fetch("http://localhost:5000/users/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata), //convert javascript to json
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log("data saved");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Login Success!!👍",
        });

        res.json().then((data) => {
          console.log(data);

          sessionStorage.setItem("user", JSON.stringify(data));
        });
      } else if (res.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Login Failed!!👍",
        });
      }
    })
    .catch((err) => {
      console.error(err);
  });
   
  };

  return (
    <div className="login-bg"style={{paddingTop:'5%'}}>
      <div className="col-md-4 col-sm-6 mx-auto my-auto">
        <div className="card">
          <div className="card-body">
            {/* <img
              style={{  }}
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            /> */}

            {/* <div
              style={{
                background:
                  "url(https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)",
                height: "27rem",
                width: "27rem",
                backgroundPosition: "center",
              }}
            ></div> */}
            <h3 className="mt-5 mb-5">Login Here</h3>

            <Formik initialValues={loginform} onSubmit={logininSubmit}>
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
          
<TextField
                    variant="outlined"
                    className="w-100 mt-3"
                    label="Email"
                    type="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <TextField
                    variant="outlined"
                    className="w-100 mt-3"
                    label="Password"
                    type="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <Button
                    type="submit"
                    className="w-100 mt-3"
                    variant="contained"
                    color="primary"
                    >
                    Login Now
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginin;