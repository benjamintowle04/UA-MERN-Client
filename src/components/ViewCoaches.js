import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import maxPicture from "../images/maxPicture.jpg";
import benPicture from "../images/benPicture.jpg";
import elliePicture from "../images/elliePicture.jpg"
import jessePicture from "../images/jessePicture.png"
import anthonyPicture from "../images/anthonyPicture.png"
import tysonPicture from "../images/tysonPicture.jpg"
import rexPicture from "../images/rexPicture.jpg"
import natePicture from "../images/natePicture.jpg"
import ryanPicture from "../images/ryanPicture.jpg"



const ViewCoaches = () => {
    const navigate = useNavigate();
    const [coaches, setCoaches] = useState([]);
    const [formLink, setFormLink] = useState("");

    const coachImages = {
        "max-robinson": maxPicture,
        "ben-towle": benPicture,
        "ellie-robinson": elliePicture,
        "jesse-pladsen": jessePicture,
        "anthony-potratz": anthonyPicture,
        "tyson-luu": tysonPicture,
        "rex-perley": rexPicture, 
        "nate-birhane": natePicture,
        "ryan-pangier": ryanPicture
    };

    useEffect(() => {
        const loadAllCoaches = async (sport) => {
            const response = await axios.get("https://universal-athletics-ad6cc5ea5023.herokuapp.com/listCoaches");
            setCoaches(response.data);
        };
        loadAllCoaches();
    }, []);

    const selectCoach = (coachId) => {
        navigate(`/coach/${coachId}`);
    };



    return (
        <main>
            <div className="container-coach-heading">
                <h2 className="display-2 coach-list-header" id="coach-name">Find the Coach For You!</h2>
                <hr className="featurette-divider" />
            </div>

            <hr className="featurette-divider" />

            <div className="container" id="coach-list-container">
                {coaches.map((coach) => (
                    <div class="list-item">
                        <svg
                            class="bd-placeholder-img rounded-circle"
                            width="140"
                            height="140"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Placeholder"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                            <image
                                xlinkHref={coachImages[coach.coachId]}
                                width="140"
                                height="140"
                                preserveAspectRatio="xMidYMid slice"
                            />
                        </svg>
                        <h4>{coach.coachName}</h4>
                        <p>Location: {coach.location}</p>
                        <a className="btn btn-primary" onClick={() => selectCoach(coach.coachId)}>View More</a>
                    </div>
                ))}
            </div>
            <hr className="featurette-divider" />
        </main>
    )
}

export default ViewCoaches;