import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import advancedAthletics from '../images/advancedAthletics.png';
import advancedAthletics1 from '../images/advancedAthletics1.png';
import advancedAthletics2 from '../images/advancedAthletics2.png';
import advancedAthletics3 from '../images/advancedAthletics3.png';


const AdvancedAthletics = () => {
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
        navigate(`/list-coaches/${"AdvancedAthletics"}`)
    }

    return (
        <div>
            <div className="container-coach-heading">
                <h2 className="display-2 coach-title" id="coach-name">Welcome To Advanced Athletics!</h2>
                <div className="header-description-container">
                    <p className="header-description">
                        At Universal Athletics, we offer specialized training sessions to kids of all ages looking to take their game to the next level in their respective sport(s). Our incredible coaching staff along with our accessible resources allow participants in our Advanced Athletics programs thrive and grow as an athlete and as a person. Training sessions can be booked as 1 on 1 coaching sessions for a more personalized experienced or as a group.
                    </p>
                </div>
                <hr className="featurette-divider" />
            </div>
            <div className="row">
                <div className="col col-text-left">
                    <div className="margining">
                        <h3 className="featurette-heading fw-normal lh-2" style={{ marginBottom: '45px' ,marginTop: '40px' }}>
                            Take your game to the next level!
                        </h3>
                    </div>
                </div>
                <div className="col svg-col-right">
                    <div className="margining" style={{marginLeft: '0px'}}>
                        <p>
                            Our network of coaches in the midwest area are committed to helping young athlete grow and improve in the sports they play. From the basic fundamentals to highly experienced athletes, UA offers coaching and mentorship for all skill levels to help kids reach their goals big and small.
                        </p>
                    </div>
                </div>
            </div>
            <hr className="featurette-divider" />
            <div className="col-container" style={{marginLeft: "250px", marginRight: "250px"}}>
                <div className="row">
                    <div className="col image-col" style={columnStyle}>
                        <img src={advancedAthletics} alt="Placeholder" className="image" style={imageStyle} />
                    </div>
                    <div className="col image-col" style={columnStyle}>
                        <img src={advancedAthletics1} alt="Placeholder" className="image" style={imageStyle} />
                    </div>
                </div>
                <div className="row">
                    <div className="col image-col" style={columnStyle}>
                        <img src={advancedAthletics2} alt="Placeholder" className="image" style={imageStyle} />
                    </div>
                    <div className="col image-col" style={columnStyle}>
                        <img src={advancedAthletics3} alt="Placeholder" className="image" style={imageStyle} />
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

export default AdvancedAthletics;