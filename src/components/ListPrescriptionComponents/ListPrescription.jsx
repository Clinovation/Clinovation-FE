import {React, useState, useEffect} from 'react'
import {Table, Button, Container, InputGroup,FormControl, Row, Modal, Col} from "react-bootstrap"
import { Link } from 'react-router-dom'
import FormAddPrescription from '../FormAddPrescriptionComponents/FormAddPrescription'
import SideBarDoctor from '../SideBarDoctorComponents/SideBarDoctor';
import axios from "axios";
import {
  GenerateAxiosConfig,
  HandleDate,
  HandleLowerCase,
  HandleUnauthorized,
} from "../../utils/helpers";
import FormUpdatePrescription from '../FormAddPrescriptionComponents/FormUpdatePrescription';

function ModalAddPrescription(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
       
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#F7F7F7" }}>
        <div style={{ textAlign: "center" }}>
          <h4>
            Add Prescription
          </h4>
        </div>
        <FormAddPrescription />
      </Modal.Body>
    </Modal>
  );
}

function ModalUpdatePrescription(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
       
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#F7F7F7" }}>
        <div style={{ textAlign: "center" }}>
          <h4>
            Update Prescription
          </h4>
        </div>
        <FormUpdatePrescription />
      </Modal.Body>
    </Modal>
  );
}

function ListPrescription() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShowUpdate, setModalShowUpdate] = useState(false);
  const checkName = / ^(([A-Za-z]+[,.]?[ ]?|[a-z]+['-]?)+)$ /;

  const [prescription, setPrescription] = useState({
    data: [],
    currPage: 1,
    pages: [],
  });
  const [filter, setFilter] = useState("");
  const [error, setError] = useState();

  const fetch = (page, name) => {
    const API_URL = "http://184.72.154.87:8080/api/v1";
    // if (prescription.by === "") {
      axios
        .get(`${API_URL}/recipe?name=${name}&page=${page}`, GenerateAxiosConfig())
        .then((res) => {
          if (res.status === 204) {
            setError("No record found");
          } else {
            const page = { ...res.data.page };
            const length = page.total_data / page.limit;
            const active = page.offset / page.limit + 1;
            const items = [];
            for (let i = 0; i < length; i++) {
              items.push(i + 1);
            }
            setPrescription((state) => {
              return {
                ...state,
                data: res.data.data,
                currPage: active,
                pages: items,
              };
            });
          }
        })
        .catch((error) => {
          if (error.response) {
            HandleUnauthorized(error.response);
            setError(error.response.data.meta.messages[0]);
            console.log(error);
          }
        });
    // } else if (checkName.test(prescription.by)) {
    //   axios
    //     .get(
    //       `${API_URL}/patient/?name=${by}&page=${page}`,
    //       GenerateAxiosConfig()
    //     )
    //     .then((res) => {
    //       if (res.status === 204) {
    //         setError("No record found");
    //       } else {
    //         const page = { ...res.data.page };
    //         const length = page.total_data / page.limit;
    //         const active = page.offset / page.limit + 1;
    //         const items = [];
    //         for (let i = 0; i < length; i++) {
    //           items.push(i + 1);
    //         }
    //         setPrescription((state) => {
    //           return {
    //             ...state,
    //             data: res.data.data,
    //             currPage: active,
    //             pages: items,
    //           };
    //         });
    //       }
    //     })
    //     .catch((error) => {
    //       if (error.response) {
    //         HandleUnauthorized(error.response);
    //         setError(error.response.data.meta.messages[0]);
    //         console.log(error);
    //       }
    //     });
  //   } else {
  //     axios
  //       .get(
  //         `${API_URL}/recipe`,
  //         GenerateAxiosConfig()
  //       )
  //       .then((res) => {
  //         if (res.status === 204) {
  //           setError("No record found");
  //         } else {
  //           const page = { ...res.data.page };
  //           const length = page.total_data / page.limit;
  //           const active = page.offset / page.limit + 1;
  //           const items = [];
  //           for (let i = 0; i < length; i++) {
  //             items.push(i + 1);
  //           }
  //           setPrescription((state) => {
  //             return {
  //               ...state,
  //               data: res.data.data,
  //               currPage: active,
  //               pages: items,
  //             };
  //           });
  //         }
  //       })
  //       .catch((error) => {
  //         if (error.response) {
  //           HandleUnauthorized(error.response);
  //           setError(error.response.data.meta.messages[0]);
  //           console.log(error);
  //         }
  //       });
  //   }
  // };
    }

  useEffect(() => {
    fetch(1, "");
  }, [setPrescription]);

  const handlePage = (index) => {
    fetch(index, filter);
  };
  const onChange = (e) => {
    const value = e.target.value;
    setPrescription(value);
  };

  const onStateChange = (value) => {
		setPrescription((state) => {
			return { ...state, ...value };
		});
	};
  const onClickDelete = (item) => {
    // const API_URL = process.env.BE_API_URL;
    const API_URL = "http://3.83.92.188:8080/api/v1";
    axios
      .delete(`${API_URL}/recipe/${item.uuid}`, GenerateAxiosConfig())
      .then((res) => {
        if (res.status === 204) {
          setError("No record found");
        } else if (res.status === 403) {
          setError("Forbiden");
        } else if (res.status === 500) {
          setError("Internal Server Error");
        }
      })
      .catch((error) => {
        if (error.response) {
          HandleUnauthorized(error.response);
          setError(error.response.data.meta.messages[0]);
          console.log(error);
        }
      });

    window.location.reload();
    
    setTimeout(() => {
    alert("BERHASIL MENGHAPUS ");
    }, 1000);
  };
    return (
       
        <div>
             <ModalAddPrescription
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <ModalUpdatePrescription
                show={modalShowUpdate}
                onHide={() => setModalShowUpdate(false)}
            />
            <Container fluid>
              <Row>
                <Col md="1">
                  <SideBarDoctor/>
                </Col>
                
                <Col md={11} className='mt-4'>
                <Row>
                    <div class="d-flex bd-highlight">
                        <div class="p-2 bd-highlight">
                            {/* <Link to="/addPrescription"> */}
                                <Button variant="info" onClick={() => setModalShow(true)}>
                                  <div style={{color: "white"}}>Add Prescription</div></Button>
                            {/* </Link> */}
                        </div>
                    
                        <div class="ms-auto p-2 bd-highlight">
                            <InputGroup className="mb-3" size="sm" style={{width: '300px'}}>
                                <FormControl
                                type='search'
                                name='name'
                                value={filter}
                                onChange={onChange}
                                />
                                <Button variant="outline-secondary" onClick={()=>{fetch(1,filter)}}>
                                Search
                                </Button>
                            </InputGroup>
                        </div>
                    </div>
                </Row>
                
                <Table responsive="sm" className='mt-1'>
                    <thead>

                    <tr>
                        <th>Date</th>
                        <th>Doctor</th>
                        <th>Patient</th>
                        <th>Medication</th>
                        <th>Notes</th>
                        <th>Consumption Rule</th>
                    </tr>
                    </thead>
                    <tbody>
                    {error && <p className="text-center text-dark mt-5">{error}</p>}

                    {prescription?.data?.map((item) => (
                    <tr>
                        <td>{item.date}</td>
                        <td>{item.doctor}</td>
                        <td>{item.patient}</td>
                        <td>{item.medication}</td>
                        <td>{item.notes}</td>
                        <td>{item.consumption_rule}</td>
                        <td>
                            <Button variant="outline-warning" style={{marginRight: "10px"}} size="sm" onClick={() => setModalShowUpdate(true)}>Edit</Button>
                            <Button variant="outline-danger" size="sm" onClick={() => onClickDelete(item)}>Delete</Button>
                        </td>
                    </tr>
                    ))}
                    </tbody>
                </Table>
                </Col>
              </Row>
            </Container>
        </div>
    )
}

export default ListPrescription
