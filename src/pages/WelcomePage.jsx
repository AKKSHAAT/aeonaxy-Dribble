import React, { useState } from "react";
import { Logo } from "../components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";


import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { faWarning } from "@fortawesome/free-solid-svg-icons";



export const WelcomePage = () => {
  const [emailExists, setEmailExists] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [localImgUrl, setLocalImageUrl] = useState('');
  const [location, setLoaction] = useState('');
  const navigate = useNavigate();

  const [isReady, setIsReady] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    
    setSelectedImage(file)
    if(file) setLocalImageUrl(URL.createObjectURL(file));
  };


  const takeNext = async () => {
    const formData = new FormData();
    formData.append('avatar', selectedImage);

    try {
        const avatarResponse = await axios.post('https://aeonaxy-dribble.onrender.com/user/upload-avatar', formData);

        console.log('Image uploaded successfully:', avatarResponse.data.url);

        localStorage.setItem("imgUrl", avatarResponse.data.url);
        localStorage.setItem("location", location);

        const createUserResponse = await axios.post('https://aeonaxy-dribble.onrender.com/user/create-user', {
          name: localStorage.getItem("name"),
          username: localStorage.getItem("username"),
          email: localStorage.getItem("email"),
          password: localStorage.getItem("password"),
          imgUrl: localStorage.getItem("imgUrl"),
          location: localStorage.getItem("location")
        });

        console.log('User created successfully:', createUserResponse.data);
        navigate("/what/");
        
        if(createUserResponse.status === 400) {
          setEmailExists(true);
        }

    } catch (error) {
        console.error('Error:', error);
    }
};


  const handleLocation = (e)=> {
    const value = e.target.value;
    setLoaction(value);
    console.log(location);
    setIsReady(value.trim() !== '' && selectedImage !== null);
  }

  
  return (
    <>
      <div className="m-14 ">
        <Logo color={"#d94683"} />
        
      </div>
      {/* <div className='m-auto md:px-96 px-4 max-w-1/2'> */}
      <div className="m-auto px-4 max-w-1/2 text-center md:text-left">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl mb-3 font-bold ">
            Welcome! Let's create your profile
          </h1>
          <h1 className={` ${emailExists ? "block" : "hidden"} bg-red-400 text-center text-xl text-white rounded-xl p-2`}>
  <FontAwesomeIcon icon={faWarning}/>
  email already exists
</h1>

          <p className="text-slate-600 mb-8">
            Let others get to know you better! You can do these later
          </p>

          <p className="font-bold text-xl mb-3">Add an avatar</p>
          {/* ---------------------------------img section----------------------- */}
          <div className="mb-8">
            <label htmlFor="avatar" className="cursor-pointer md:flex  ">
              {/* will renders icon or selected img */}
              <div className="mx-auto max-w-xs mb-8 md:mb-0">
                <div className="text-slate-400 w-52 h-52 rounded-full flex items-center justify-center border-slate-200 border-4 mx-auto border-dashed">
                  {localImgUrl ? (
                    <img
                      src={localImgUrl}
                      alt="Selected Avatar"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <FontAwesomeIcon icon={faCamera} size="2x" />
                  )}
                </div>
              </div>

              <section className="px-4 md:px-12 sm:mx-auto text-center md:text-left">
                <span className="w-40 mb-2 border-slate-200 border-solid border-2 rounded-md font-bold h-10 flex block justify-center mx-auto items-center">
                  choose image
                </span>
                <a 
                href="http://lol.com"
                className="text-slate-400">
                  {" > "}
                   Or choose one of our defaults
                </a>
              </section>

              <input
                id="avatar"
                name="avatar"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <label htmlFor="location" className="font-bold block text-xl mb-3">
            Add your location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            onChange={handleLocation}
            value={location}
            
            required
            className="input-base bg-inputBg-100 w-full p-3 mb-6 rounded-md "
            placeholder="Location"
          />
          <button 
            className={`bg-dribblePink px-20 py-2 rounded-lg text-white font-bold ${!isReady && 'opacity-50'}`}
            disabled={!isReady}
            onClick={takeNext}
          >
            next
          </button>

        </div>
      </div>
    </>
  );
};
