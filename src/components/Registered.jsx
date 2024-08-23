import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../registered.scss';
import check from "./assets/check.png"

function Registered() {

    function regiClose() {
        const registerdtab = document.querySelector('.Registered');
        const registerdcontainer = document.querySelector('.regiFadeOut');

        if (registerdtab.classList.contains('active')) {
            registerdcontainer.classList.add('deActivate')

          setTimeout(() => {
            registerdtab.classList.remove('active');
            registerdcontainer.classList.remove('deActivate')

          }, 1000);
        } else {
            registerdtab.classList.add('deActive');
        }
      }
    return (
        <div className="Registered">
            
            <div className="registered-container regiFadeOut">
            <div onClick={regiClose} className="X">
            <div className="bar"></div>
            <div className="bar"></div>
            </div>
            <h2>Welcome to DealMate!</h2>
            <img src={check} alt="" />
            <p>You have successfuly registered with DealMate.</p>
            </div>
        </div>
    );
}

export default  Registered;