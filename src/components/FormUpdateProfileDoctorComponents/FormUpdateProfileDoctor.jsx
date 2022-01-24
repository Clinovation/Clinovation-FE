import { React, useState } from "react";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import avatar from "../../icons/staffProfile.png";
import Cookies from "universal-cookie";
import { logout } from "../../Redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../../Redux/UserSlice";
import useValidateForm from "../../hooks/useValidateForm";
import { GenerateAxiosConfig, HandleUnauthorized } from "../../utils/helpers";
import SideBarDoctor from "../SideBarDoctorComponents/SideBarDoctor";
import style from "../FormUpdateProfileDoctorComponents/UpdateProfileDoctor.module.css"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from '../../firebase/firebase'
import { API_URL } from "../../utils/const";
function FormUpdateProfileDoctor() {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { validateForm } = useValidateForm();

  const user = useSelector((state) => state.user);
  const initialValue = {
    name: user.name,
    nik: user.nik,
    work_experience: user.work_experience,
    email: user.email,
    password: "",
    dob: user.dob,
    sex: user.sex,
    contact: user.contact,
    specialist: user.specialist
  };

  const [form, setForm] = useState(initialValue);
  const [error, setError] = useState({});

  const onClick = () => {
    dispatch(logout());
    cookies.remove("token", { path: "/", domain: window.location.hostname });
    if (window.location.pathname.includes("Profile")) {
      navigate("/");
    } else {
      window.location.reload();
    }
  };

  const updateProfile = (data) => {
    // const API_URL = "http://184.72.154.87:8080/api/v1";
    axios
      .put(
        `${API_URL}/doctor/`,
        {
          ...data,
        },
        GenerateAxiosConfig()
      )
      .then(() => {
        dispatch(login(data));
      })
      .catch((error) => {
        HandleUnauthorized(error.response);
        console.log(error);
      });
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  // const onChange = (e) =>{
  //   if(app){
  //     const file = e.target.files[0];
	// 		const storageRef = getStorage();
	// 		const fileRef = ref(storageRef, file.name);
	// 		const compressionOption = {
	// 			maxWidthOrHeight: 528,
	// 			useWebWorker: true,
	// 		};
	// 		// setLoading(true);
	// 		imageCompression(file, compressionOption).then((compressedFile) => {
	// 			uploadBytes(fileRef, compressedFile).then(() => {
	// 				getDownloadURL(fileRef)
	// 					.then((url) => {
	// 						const newData = { ...user, url_image: url };
	// 						updateProfile(newData);
	// 					})
	// 					.then(() => {
	// 						setLoading(false);
	// 					});
	// 			});
	// 		});
  //   }
  // }

  const onBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const messages = validateForm(name, value);
    setError({ ...error, ...messages });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(undefined, undefined, form);
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
    } else {
      const newData = {
        name: form.name,
        nik: form.nik,
        work_experience: form.work_experience,
        email: form.email,
        password: form.password,
        dob: form.dob,
        sex: form.sex,
        contact: form.contact,
        specialist: form.specialist
      };

      updateProfile(newData);
    }
  };


  return (
    <div>
      <Container fluid>
      <Row>
        <Col md="1">
          <SideBarDoctor/>
        </Col>
        <Col md={7} className="m-auto my-4">
          <h2 className="mb-3">Hello Doctor,</h2>
          <Form noValidate onSubmit={onSubmit}>
            <img src={avatar} style={{ height : "150px"}} className="mb-4"/>
            <div className={style.cardForm}>
             

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Name
                </Form.Label>
                <Col md="9">
                  <Form.Control 
                    type="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!error.name}
                    />
                  <Form.Control.Feedback type="invalid">
                    {error.name}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Password
                </Form.Label>
                <Col md="9">
                  <Form.Control 
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!error.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.password}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Date Of Birth
                </Form.Label>
                <Col md="9">
                  <Form.Control 
                    type="text"
                    name="dob"
                    value={form.dob}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!error.dob}
                    />
                  <Form.Control.Feedback type="invalid">
                    {error.dob}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Sex
                </Form.Label>
                <Col md="9">
                  <Form.Select
                    aria-label="Default select example"
                    name="sex"
                    value={form.sex}
                    onChange={onChange}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Email
                </Form.Label>
                <Col md="9">
                  <Form.Control 
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!error.email} 
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.email}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Contact
                </Form.Label>
                <Col md="9">
                  <Form.Control 
                    type="text"
                    name="contact"
                    value={form.contact}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!error.contact}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.contact}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <div
                style={{ borderTop: "2px solid black", padding: "10px" }}
              ></div>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Work Experience
                </Form.Label>
                <Col md="9">
                  <Form.Control 
                    type="text"
                    name="work_experience"
                    value={form.work_experience}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!error.work_experience}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid number.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Schedule
                </Form.Label>
                <Col md="9">
                  <Form.Select aria-label="Default select example">
                    <option disabled>Specialist</option>
                    <option value="1">One</option>
                    <option value="3">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid specialist.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Work Hour
                </Form.Label>
                <Col md="9">
                  <Form.Select aria-label="Default select example">
                    <option disabled>Specialist</option>
                    <option value="1">One</option>
                    <option value="3">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid specialist.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Specialist
                </Form.Label>
                <Col md="9">
                  <Form.Select aria-label="Default select example">
                    <option disabled>Specialist</option>
                    <option value="1">One</option>
                    <option value="3">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid specialist.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
            </div>

            <div className="d-flex justify-content-between">
              <div >
                {/* <Link to="/dashboardDoctor"> */}
                  <Button
                    type="submit"
                    variant="success"
                    style={{ marginRight: "30px",width: "150px" }}
                    // size="lg"
                  >
                    Save
                  </Button>
                {/* </Link> */}

                {/* <Link to="/dashboardDoctor">
                  <Button variant="warning" style={{ marginRight: "10px" }}>
                    Back to Home
                  </Button>
                </Link> */}
              </div>
              <div >
                <Button variant="danger" onClick={onClick} style={{ width: "150px" }}>Logout</Button>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default FormUpdateProfileDoctor;
