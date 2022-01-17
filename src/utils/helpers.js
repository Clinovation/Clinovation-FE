import { Base64 } from "js-base64";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function Redirect(ctx, location) {
  const navigate = useNavigate();
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    navigate(location);
  }
}

function HandleUnauthorized(res) {
  const navigate = useNavigate();
  if ([401, 403].includes(res?.status)) {
    const cookies = new Cookies();
    cookies.remove("token", { path: "/", domain: window.location.hostname });
    navigate("/");
  }
}

function GenerateAxiosConfig() {
  const cookies = new Cookies();
  const token = Base64.decode(cookies.get("token"));
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return config;
}

export { HandleUnauthorized, Redirect, GenerateAxiosConfig };
