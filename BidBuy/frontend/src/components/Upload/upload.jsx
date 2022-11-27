import React, {useState} from 'react'
import {Image} from 'cloudinary-react';
import axios from 'axios'

function UploadFile() {
    const [imageSelected, setimageSelected] = useState("")
   const uploadImage = (files)=>{
    console.log(files);
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "drb3j96q");

    axios.post(
        "https://api.cloudinary.com/v1_1/dumnaigxr/image/upload",
        formData
    ).then((response)=>{
        console.log(response);
    })
    }
  return (
    <div>
        <input type = 'file' onChange={(event)=>{setimageSelected(event.target.files[0])}} />
        <button onClick={uploadImage}>Upload Image</button>
        <Image 
        style = {{width: 200}}
        cloudName = "dumnaigxr" 
        publicId="http://res.cloudinary.com/dumnaigxr/image/upload/v1669582193/gtwqdghnizylegpbisch.png"/>
    </div>

  )
}

export default UploadFile