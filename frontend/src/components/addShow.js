import { Button, TextField } from "@mui/material"
import React from "react"
import { Formik } from "formik"
import Swal from "sweetalert2"
// import * as Yup from "yup";

const addShow = () => {
  // 1. Create a form object which should match with model fields
  const userForm = {
    title: "",
    duration: "",
    genere: "",
    publisher: "",
    reviews: "",
    rating: "",
    views: "",
    createdAt: new Date(),
  }

  // 2. Create a function for form submission
  const userSubmit = (formdata) => {
    console.log(formdata)

    fetch("http://localhost:5000/shows/add", {
      method: "POST",
      body: JSON.stringify(formdata), //convert javascript to json
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
          if (res.status === 200) {
            console.log("data saved");
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Show Added Successfully!!👍",
            });
          }
        })
  }
  // fetch("http://localhost:5000/users/add", {
  //   method: "POST",
  //   body: JSON.stringify(formdata), //convert javascript to json
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  // .then((res) => {
  //     if (res.status === 200) {
  //       console.log("data saved");
  //       Swal.fire({
  //         icon: "success",
  //         title: "Success",
  //         text: "Registered Successfully!!👍",
  //       });
  //     }
  //   })
  //   .catch((err) => {
  //     console.error(err);
  // });
  //   3. use Formik component
  // const formSchema = Yup.object().shape({
  //   username: Yup.string()
  //     .min(2, "Too Short username!")
  //     .max(10, "Too Long username!")
  //     .required("username is Required"),
  //   // lastName: Yup.string()
  //   //   .min(2, 'Too Short!')
  //   //   .max(50, 'Too Long!')
  //   //   .required('Required'),
  //   email: Yup.string().email("Invalid email").required("Required"),
  //   password: Yup.string()
  //     .required("Required")
  //     .matches(
  //       /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //       "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  //     ),
  // });
  return (
    <div className="container">
      <div className="card" style={{ marginTop: "10%" }}>
        <div className="card-body">
          <div className="row">
            <div className="col">{/* <img src={"frontend/components/image.png"} alt=""/> */}</div>
            <div className="col">
              {/* <h1>Signup Here</h1> */}
              {/* <hr className="mb-5" /> */}

              <Formik initialValues={userForm} onSubmit={userSubmit}>
                {({ values, handleChange, handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      label="title"
                      variant="outlined"
                      className="w-100 mb-4"
                      id="title" // name can also used
                      onChange={handleChange}
                      value={values.title} // value passed above
                      helperText={errors.title}
                      error={Boolean(errors.title && touched.title)}
                    />
                    <TextField
                      label="duration"
                      variant="outlined"
                      className="w-100 mb-4"
                      id="duration"
                      onChange={handleChange}
                      value={values.duration}
                    />
                    <TextField
                      label="genere"
                      variant="outlined"
                      className="w-100 mb-4"
                      id="genere" // name can also used
                      onChange={handleChange}
                      value={values.genere} // value passed above
                      helperText={errors.genere}
                      error={Boolean(errors.genere && touched.genere)}
                    />
                    <TextField
                      label="Publisher"
                      variant="outlined"
                      className="w-100 mb-4"
                      id="publisher"
                      onChange={handleChange}
                      value={values.Publisher}
                      helperText={errors.publisher}
                      error={Boolean(errors.publisher && touched.publisher)}
                    />

                    <TextField
                      label="reviews"
                      variant="outlined"
                      className="w-100 mb-4"
                      id="reviews" // name can also used
                      onChange={handleChange}
                      value={values.reviews} // value passed above
                      helperText={errors.reviews}
                      error={Boolean(errors.reviews && touched.reviews)}
                    />

                    <TextField
                      label="rating"
                      variant="outlined"
                      className="w-100 mb-4"
                      id="rating" // name can also used
                      onChange={handleChange}
                      value={values.rating} // value passed above
                      helperText={errors.rating}
                      error={Boolean(errors.rating && touched.rating)}
                    />

                    <TextField
                      label="views"
                      variant="outlined"
                      className="w-100 mb-4"
                      id="views" // name can also used
                      onChange={handleChange}
                      value={values.views} // value passed above
                      helperText={errors.views}
                      error={Boolean(errors.views && touched.views)}
                    />


                    <TextField
                      label="createdaf"
                      variant="outlined"
                      className="w-100 mb-4"
                      id="createdaf" // name can also used
                      onChange={handleChange}
                      value={values.createdaf} // value passed above
                      helperText={errors.createdaf}
                      error={Boolean(errors.createdaf && touched.createdaf)}
                    />

                    <Button type="submit" variant="contained">
                      Submit
                    </Button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default addShow
