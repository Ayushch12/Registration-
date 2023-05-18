function validation(values) {
    let  error = {}
    const email_Pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_Pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.name === "") {
      error.name = "Name must not be empty";
    } else {
        error.name = "";
    }


    if (values.email === "") {
        error.email = "Name must not be empty";
      } else if (!email_Pattern.test(values.email)) {
        error.email = "Email does not match";
      } else {
          error.email = "";
      }

    if (values.password === "") {
      error.password =  "Password must not be empty" ;
    } else if (!password_Pattern.test(values.password)) {
      error.password = " Password does not match ";
    } else {
        error.password = "";
    }
    return error;
  }

  export default validation;