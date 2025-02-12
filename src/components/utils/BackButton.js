// components/BackButton.js
import React from 'react';
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();
    return (
        <button className="back" onClick={() => navigate(-1)}>
            <IoReturnUpBackOutline />
        </button>
    );
}

export default BackButton;