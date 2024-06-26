import React, {useEffect, useRef} from 'react'

const UploadWidget = () => {

    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    
    useEffect(()=>{
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'djnatomgf',
            uploadPreset: 'gre5z1b4'
        }, (error, result)=>{
            console.log(result);
        });
    }, []);

    return (
        <button onClick={() => widgetRef.current.open()}>
            Upload
        </button>
    )
}

export default UploadWidget;
