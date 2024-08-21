import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import maxPicture from "../images/maxPicture.jpg";
import benPicture from "../images/benPicture.jpg";
import elliePicture from "../images/elliePicture.jpg"
import jessePicture from "../images/jessePicture.png"
import anthonyPicture from "../images/anthonyPicture.png"
import tysonPicture from "../images/tysonPicture.jpg"
import rexPicture from "../images/rexPicture.jpg"
import natePicture from "../images/natePicture.jpg"
import ryanPicture from "../images/ryanPicture.jpg"


const ListCoaches = () => {
    const [coaches, setCoaches] = useState([]);
    const [formLink, setFormLink] = useState("");
    let callingPage = useParams();
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
        selectFormLink();
    }, []);

    const loadCoachesForSport = async (sport) => {
        const response = await axios.get(`https://universal-athletics-ad6cc5ea5023.herokuapp.com/listCoaches/${sport}`);
        setCoaches(response.data);
    };

    const selectFormLink = () => {
        console.log("Selecting Form Link")
        if (callingPage.callingPage == "AdvancedAthletics") {
            setFormLink("https://docs.google.com/forms/d/1Q9fZHVVQJDSIlOpQKYNoSPtC2WkFoZzLBSDOS8rxlHA/viewform?entry.1396105213=")
        } else if (callingPage.callingPage == "AccessibleAthletics") {
            setFormLink("https://docs.google.com/forms/d/10Xb3nP_TR8cR_TjcOWkgWAHflrjesI-pz99ZDPzfViQ/viewform?entry.1183973053=")
        } else if (callingPage.callingPage == "ActiveAthletics") {
            setFormLink("https://docs.google.com/forms/d/1yIt3kIZ6d5f5Se1zhvUb7b6gatxEqmhjq3JPa6HMe9o/viewform?entry.1696141847=")
        }
    }

    console.log("Calling Page = ", callingPage.callingPage)

    const handleButtonClick = (prefillValue) => {
        window.location.href = `${formLink}${encodeURIComponent(prefillValue)}`;
    };


    return (
        <main>
            <div className="container-coach-heading">
                <h2 className="display-2 coach-list-header" id="coach-name">Find the Coach For You!</h2>
                <hr className="featurette-divider" />
            </div>
            <div className="container">
                <div className="container">
                    <h5 className="d-flex justify-content-center">Select the sport you are interested in</h5>
                </div>
                {callingPage.callingPage == "AdvancedAthletics" &&
                    <div className="row filter-buttons">
                        <div className="col d-flex justify-content-center align-items-center">
                            <button onClick={() => loadCoachesForSport('Football')} className="btn btn-secondary">Football</button>
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <button onClick={() => loadCoachesForSport('Basketball')} className="btn btn-secondary">Basketball</button>
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <button onClick={() => loadCoachesForSport('Baseball')} className="btn btn-secondary">Baseball</button>
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <button onClick={() => loadCoachesForSport('Soccer')} className="btn btn-secondary">Soccer</button>
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <button onClick={() => loadCoachesForSport('Volleyball')} className="btn btn-secondary">Volleyball</button>
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <button onClick={() => loadCoachesForSport('Track')} className="btn btn-secondary">Track</button>
                        </div>
                    </div>}
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
                        <a className ="btn btn-primary" onClick={() => handleButtonClick(coach.coachName)}>Sign Up!</a>
                    </div>
                ))}
            </div>
            <hr className="featurette-divider" />
        </main>
    )
}

export default ListCoaches;