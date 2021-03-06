import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/UserSlice";
import Cookies from "universal-cookie";
import axios from "axios";
import { Base64 } from "js-base64";
import { GiConsoleController } from "react-icons/gi";
import { API_URL } from "../../utils/const";

export default function useHandleLogin() {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (res) => {
    // const API_URL = "http://3.83.92.188:8080/api/v1";
    let userData = {
      ...res,
    };
    delete userData.token;
    const config = {
      headers: {
        Authorization: "Bearer " + res.token,
      },
    };
    await axios
      .get(`${API_URL}/nurse/jwt`, config)
      .then((resp) => {
        console.log(resp);
        userData.id = resp.data.data.id;
        userData.uuid = resp.data.data.uuid;
        userData.nik = resp.data.data.nik;
        userData.name = resp.data.data.name;
        userData.email = resp.data.data.email;
        userData.dob = resp.data.data.dob;
        userData.sex = resp.data.data.sex;
        userData.contact = resp.data.data.contact;
        userData.role = resp.data.data.role;
        userData.work_experience = resp.data.data.work_experience;
        userData.work_hour = resp.data.data.work_hour;
        userData.work_day = resp.data.data.work_day;
        userData.avatar = resp.data.data.avatar;
      })
      .catch(() => {
        userData.id = 0;
        userData.uuid = "";
        userData.nik = "";
        userData.name = "";
        userData.email = "";
        userData.dob = "";
        userData.sex = "";
        userData.contact = "";
        userData.role = "";
        userData.work_experience = "";
        userData.work_hour = "";
        userData.work_day = "";
        userData.avatar = "";
      });

    const hash = Base64.encode(res.token);
    cookies.set("token", hash, {
      path: "/",
      domain: window.location.hostname,
    });
    dispatch(login(userData));
    navigate("/dashboardNurse");
  };
  return handleLogin;
}
