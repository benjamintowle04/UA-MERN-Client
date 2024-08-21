import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import accessibleAthletics from '../images/accessibleAthletics.png';
import accessibleAthletics1 from '../images/accessibleAthletics1.png';
import accessibleAthletics2 from '../images/accessibleAthletics2.png';
import accessibleAthletics3 from '../images/accessibleAthletics3.png';

const AccessibleAthletics = () => {
    const navigate = useNavigate();

    const imageStyle = {
        width: '100%',
        height: 'auto',
        display: 'block',
    };

    const columnStyle = {
        padding: '0',
    };

    const viewCoaches = () => {
        navigate(`/list-coaches/${"AccessibleAthletics"}`)
    }

    return (
        <div>
            <div className="container-coach-heading">
                <h2 className="display-2 coach-title" id="coach-name">Welcome To Accessible Athletics!</h2>
                <div className="header-description-container">
                    <p className="header-description">
                        Accesibile Athletics provides coaching tailored towards the individuals specific needs. We take it upon ourselves to provide opportunity for everyone while doing it in a progressive manner. Our coaches have background working in diverse populations and while facing unique challenges. We are committed to working with our clients to provide a worthwhile experience to positively contribute to their lives. A session for Accessible Athletics can go from one on one training sessions, to easy laid back activities. As long as our clients get out and get active, we are happy!</p>
                </div>
                <hr className="featurette-divider" />
            </div>
            <div className="row">
                <div className="col col-text-left">
                    <div className="margining">
                        <h3 className="featurette-heading fw-normal lh-2" style={{ marginBottom: '45px', marginTop: '40px' }}>
                            Be a part of something greater!
                        </h3>
                    </div>
                </div>
                <div className="col svg-col-right align-items-center">
                    <div className="margining text-left" style={{ marginLeft: '0px' }}>
                        <p>
                            At Universal Athletics, we encourage anyone and everyone to get out and get active. Our program can offer either community/team based activities, or a more personalized approach. We are committed to providing a safe and fun environment for everyone and can accomadate any level of fitness, abilitys, and limitations.
                        </p>
                    </div>
                </div>
            </div>
            <hr className="featurette-divider" />
            <div className='col-container' style={{ marginLeft: "250px", marginRight: "250px" }}>
                <div className="row">
                    <div className="col image-col" style={columnStyle}>
                        <img src={accessibleAthletics} alt="Placeholder" className="image" style={imageStyle} />
                    </div>
                    <div className="col image-col" style={columnStyle}>
                        <img src={accessibleAthletics1} alt="Placeholder" className="image" style={imageStyle} />
                    </div>
                </div>
                <div className="row">
                    <div className="col image-col" style={columnStyle}>
                        <img src={accessibleAthletics2} alt="Placeholder" className="image" style={imageStyle} />
                    </div>
                    <div className="col image-col" style={columnStyle}>
                        <img src={accessibleAthletics3} alt="Placeholder" className="image" style={imageStyle} />
                    </div>
                </div>
            </div>
            <div style={{ alignItems: "center" }}>
                <a style={{ float: "left" }} className="btn btn-lg btn-primary" onClick={viewCoaches}>Book An Appointment</a>
            </div>
            <hr className="featurette-divider" />
        </div>
    )
}

export default AccessibleAthletics;