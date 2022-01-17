export default function useValidateForm() {
  const validateForm = (name, value, formValue = undefined) => {
    const regexName = /^[a-zA-Z ]{3,}$/;
    const regexDob =
      /^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)\d{4}$/;
    const regexPassword = /.{6,}$/;
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPhone = /^[0-9]{10,15}$/;
    const regexNik = /^[0-9]{16,16}$/;

    let messages = {};

    if (!formValue) {
      if (name === "contact" && !regexPhone.test(value)) {
        messages = { [name]: "Invalid phone number" };
      } else if (name === "contact" && regexPhone.test(value)) {
        messages = { [name]: "" };
      }
      if (name === "email" && !regexEmail.test(value)) {
        messages = { [name]: "Invalid email format" };
      } else if (name === "email" && regexEmail.test(value)) {
        messages = { [name]: "" };
      }
      if (name === "nik" && !regexNik.test(value)) {
        messages = { [name]: "Must be 16 character" };
      } else if (name === "nik" && regexNik.test(value)) {
        messages = { [name]: "" };
      }
      if (name === "password" && !regexPassword.test(value)) {
        messages = { [name]: "Min. 6 character" };
      } else if (name === "password" && regexPassword.test(value)) {
        messages = { [name]: "" };
      }
      if (name === "name" && !regexName.test(value)) {
        messages = { [name]: "Min. 3 character and Not a Number" };
      } else if (name === "name" && regexName.test(value)) {
        messages = { [name]: "" };
      }
      if (name === "dob" && !regexDob.test(value)) {
        messages = { [name]: "Must be format mm-dd-yyyy" };
      } else if (name === "dob" && regexDob.test(value)) {
        messages = { [name]: "" };
      }
      if (name === "sex" && value === "") {
        messages = { [name]: "" };
      }
      if (name === "work_experience" && value === "") {
        messages = { [name]: "" };
      }
    } else if (formValue) {
      for (const key in formValue) {
        if (formValue[key] === "") {
          messages[key] = "Field cannot be empty";
        }
      }
    }
    return messages;
  };

  return { validateForm };
}
