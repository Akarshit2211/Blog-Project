import React, {useRef} from 'react';
import classes from './imageUploadDiv.module.css';
import Form from 'react-bootstrap/Form';

const imageUploadDiv = () => {

    

    return (
            <div className = {classes.imageContainer}>
                <input type="file" accept="image/*" hidden />
                <div className = {classes.imageUploadDiv} 
                    onClick={() => {imgRef.current.click();}}
                >
                    <ul style = {{listStyle : 'none', margin: 'auto'}}>
                        <li>
                            <svg
                                aria-hidden="true"
                                className={classes.svgUpload}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                                </path>
                            </svg>
                        </li>
                        <li>
                            <p className = {classes.selectImage}>Select Image</p>
                        </li>
                    </ul>
                </div>
                <input
                    ref={imgRef}
                    type="file"
                    onChange={handleImageChange}
                    accept="image/*"
                    className="hidden"
                />
            </div>
    )
}

export default imageUploadDiv;