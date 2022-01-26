import React, { useState } from "react";
import { Button, Card, Input } from "react-bootstrap";
import Date from "../scheduleDate";
import staffprofile from "../../icons/staffProfile.png";
import styles from "../staffProfilePictureComponents/ProfilePicture.module.css";
import Paginations from "../pagination";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import imageCompression from "browser-image-compression";
import { app } from "../../firebase/firebase"
import {
  GenerateAxiosConfig,
  HandleDate,
  HandleLowerCase,
  HandleUnauthorized,
} from "../../utils/helpers";
import axios from "axios";
import { API_URL } from "../../utils/const";
import { login } from "../../Redux/UserSlice";
import Avatar from '../../icons/staffProfile.png'

export default function ProfilePicture() {
  // const user = useSelector((state) => state.user);
  	const [user, setUser] = useState(useSelector((state) => state.user))
	const dispatch = useDispatch();
  	const navigate = useNavigate();

  	const updateProfile = (data) => {
		axios
			.put(
				`${API_URL}/medicalStaff/`,
				{
					...data.avatar,
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
		if (app) {
			const file = e.target.files[0];
			const storageRef = getStorage();
			const fileRef = ref(storageRef, file.name);
			const compressionOption = {
				maxWidthOrHeight: 528,
				useWebWorker: true,
			};
			// setLoading(true);
			imageCompression(file, compressionOption).then((compressedFile) => {
				uploadBytes(fileRef, compressedFile).then(() => {
					getDownloadURL(fileRef)
						.then((url) => {
							// const newData = { ...user, url_image: url };
              console.log(url)
              // user.avatar = url
              setUser({...user, avatar : url})
							// updateProfile(newData);
							updateProfile(user);
						})
						// .then(() => {
							// setLoading(false);
              
						// });
				});
			});
		}
	};
	console.log(user)
  return (
    <div>
      <div className={`${styles.title}`}>Hello Medical Staff,</div>
      <br />
      {/* <div className={`${styles.profil}`}>
		{user.avatar === "" ? (
			<img src={Avatar} className={`${styles.profilepicture}`} />
			) : (
			<img
				src={user.avatar}
				className={`${styles.profilepicture}`}
			/>
		)} */}
        {/* <img 
          src={user?.avatar} 
          alt="" 
          className={`${styles.profilepicture}`} 
        /> */}
        {/* <Button variant="info" style={{ color: "white" }}>
          Change Picture
        </Button>{" "} */}
        {/* <input type="file" onChange={onChange}/>
        
      </div> */}
     
    </div>
  );
}
