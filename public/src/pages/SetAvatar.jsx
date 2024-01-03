import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import loader from "../assets/loader.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setAvatarRoute } from "../utils/APIRoutes";

export default function SetAvatar() {
  const api = "kttps://api.multiavatar.com/45678945";
  const navigate = useNavigate();
  const [avatars, setAvatars]= useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);


  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const setProfilePicture = async () => {}    
  useEffect(()=>{
    const data = [];
    for(let i=0;i<4;i++){
        const image = await axios.get(
          `${api}/${Math.round(Math.random() * 1000)}`
        );
        const buffer = new Buffer(image.data);
        data.push(buffer.toString("base64"));
    }
    setAvatars(data);
    setIsLoading(flase);
  },[]);

  return (
    <>
      <Container>
        <div className="title-container">
            <h1>Pick an avatar as your profile picture</h1>
        </div>
        <div className="avatars">
            {avatars.map((avatars,index)=>{
              return(
                <div className={`avatar ${selectedAvatar === index ? "selected" : ""}`}>
                </div>
              )
            })
          }
        </div>
      </Container>
      <ToastContainer/>
    </>
  );
}

const Container = styled.div``;