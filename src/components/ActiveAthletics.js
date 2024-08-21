import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import activeAthletics from '../images/activeAthletics.png';
import activeAthletics1 from '../images/activeAthletics1.png';
import activeAthletics2 from '../images/activeAthletics2.png';
import activeAthletics3 from '../images/activeAthletics3.png';

const ActiveAthletics = () => {
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
        navigate(`/list-coaches/${"ActiveAthletics"}`)
    }

    return (
        <div>
            <div className="container-coach-heading">
                <h2 className="display-2 coach-title" id="coach-name">Welcome To Active Athletics!</h2>
                <div className="header-description-container">
                    <p className="header-description">
                        Active Athlectics is committed to adding more fitness to our day to day lives in creative and unique ways. From personalized workout sessions to yoga, or engaging in activities such as spikeball, active athletics is here to create a positive environment for everyone to stay active through.
                    </p>
                </div>
                <hr className="featurette-divider" />
            </div>
            <div className="row">
                <div className="col col-text-left">
                    <div className="margining">
                        <h3 className="featurette-heading fw-normal lh-2" style={{ marginBottom: '45px', marginTop: '40px' }}>
                            Get out and get active!
                        </h3>
                    </div>
                </div>
                <div className="col svg-col-right">
                    <div className="margining" style={{ marginLeft: '0px' }}>
                        <p>
                            Active Athletics sessions are aimed to all levels of fitness, ages, and skill levels. Our coaches are committed to helping you reach your fitness goals and are available to work with you to help you reach your full potential. From the basics to the advanced, our coaches are here to help you reach the best version of yourself!
                        </p>
                    </div>
                </div>
            </div>
            <hr className="featurette-divider" />
            <div className='col-container' style={{ marginLeft: "250px", marginRight: "250px" }}>
                <div className="row">
                    <div className="col image-col" style={columnStyle}>
                        <img src={activeAthletics} alt="Placeholder" className="image" style={imageStyle} />
                    </div>
                    <div className="col image-col" style={columnStyle}>
                        <img src={activeAthletics1} alt="Placeholder" className="image" style={imageStyle} />
                    </div>
                </div>
                <div className="row">
                    <div className="col image-col" style={columnStyle}>
                        <img src={activeAthletics2} alt="Placeholder" className="image" style={imageStyle} />
                    </div>
                    <div className="col image-col" style={columnStyle}>
                        <img src={activeAthletics3} alt="Placeholder" className="image" style={imageStyle} />
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

export default ActiveAthletics;