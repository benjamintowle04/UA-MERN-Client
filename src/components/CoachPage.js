import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import bentowle1 from "../images/ben_towle_cs_1.jpg"
import bentowle2 from "../images/ben_towle_cs_2.jpg"
import maxrobinson1 from '../images/max_robinson_cs_1.jpg'
import maxrobinson2 from '../images/max_robinson_cs_2.jpg'
import ellierobinson1 from '../images/ellie_robinson_cs_1.jpg'
import ellierobinson2 from '../images/ellie_robinson_cs_2.jpg'
import jessepladsen1 from '../images/jesse_pladsen_cs_1.jpg'
import jessepladsen2 from '../images/jesse_pladsen_cs_2.jpg'
import anthonypotratz1 from '../images/anthony_potratz_cs_1.jpg'
import anthonypotratz2 from '../images/anthony_potratz_cs_2.jpg'
import ryanpangier1 from '../images/ryan_pangier_cs_1.jpg'
import ryanpangier2 from '../images/ryan_pangier_cs_2.jpg'
import natebirhane1 from '../images/nate_birhane_cs_1.jpg'
import natebirhane2 from '../images/nate_birhane_cs_2.jpg'
import rexperley1 from '../images/rex_perley_cs_1.jpg'
import rexperley2 from '../images/rex_perley_cs_2.jpg'
import tysonluu1 from '../images/tyson_luu_cs_1.jpg'
import tysonluu2 from '../images/tyson_luu_cs_2.jpg'


const CoachPage = () => {
    const [coachName, setCoachName] = useState("")
    const [coachAbout, setCoachAbout] = useState("")
    const [coachUaMeaning, setCoachUaMeaning] = useState("")
    const [coachSports, setCoachSports] = useState([])
    const [coachPhone, setCoachPhone] = useState("")
    const [coachEmail, setCoachEmail] = useState("")
    const [coachImage1, setCoachImage1] = useState("")
    const [coachImage2, setCoachImage2] = useState("")
    const { coachId } = useParams();

    console.log("In CoachPage", coachId)


    useEffect(() => {
        console.log("In Use Effect", coachId)
        const loadCoach = () => {
            if (!coachId) {
                console.error('No coach selected');
                return;
            }

            console.log("In Load Coach", coachId);

            fetch(`https://universal-athletics-ad6cc5ea5023.herokuapp.com/coach/${coachId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    if (!data) {
                        throw new Error('Received empty data');
                    }

                    console.log("SELECTED COACH FROM FETCH ", data)
                    console.log(data.coachName)

                    // Determine the coach image
                    if (coachId == "ben-towle") {
                        console.log("In Ben Towle")
                        setCoachImage1(bentowle1)
                        setCoachImage2(bentowle2)
                    }
                    else if (coachId == "max-robinson") {
                        console.log("In Max Robinson")
                        setCoachImage1(maxrobinson1)
                        setCoachImage2(maxrobinson2)
                    }
                    else if (coachId == "ellie-robinson") {
                        console.log("In Ellie Robinson")
                        setCoachImage1(ellierobinson1)
                        setCoachImage2(ellierobinson2)
                    }
                    else if (coachId == "jesse-pladsen") {
                        console.log("In Jesse Pladsen")
                        setCoachImage1(jessepladsen1)
                        setCoachImage2(jessepladsen2)
                    }
                    else if (coachId == "anthony-potratz") {
                        console.log("In Anthony Potratz")
                        setCoachImage1(anthonypotratz1)
                        setCoachImage2(anthonypotratz2)
                    }
                    else if (coachId == "ryan-pangier") {
                        console.log("In Ryan Pangier")
                        setCoachImage1(ryanpangier1)
                        setCoachImage2(ryanpangier2)
                    }
                    else if (coachId == "nate-birhane") {
                        console.log("In Nate Birhane")
                        setCoachImage1(natebirhane1)
                        setCoachImage2(natebirhane2)
                    }
                    else if (coachId == "rex-perley") {
                        console.log("In Rex Perley")
                        setCoachImage1(rexperley1)
                        setCoachImage2(rexperley2)
                    }
                    else if (coachId == "tyson-luu") {
                        console.log("In Tyson Luu")
                        setCoachImage1(tysonluu1)
                        setCoachImage2(tysonluu2)
                    }
                    else {
                        console.log("Error Finding Images for Coach")
                    }

                    let spts = []
                    for (let sport of data.sports) {
                        spts.push(sport.sport)
                    }
                    console.log("Sports = ", spts)
                    console.log("Setting Hooks")
                    setCoachName(data.coachName)
                    setCoachAbout(data.about)
                    setCoachUaMeaning(data.uaMeaning)
                    setCoachPhone(data.phone)
                    setCoachEmail(data.email)
                    setCoachSports(spts)
                })
                .catch(error => {
                    console.error('Error fetching coach data:', error);
                });
        };


        if (coachId) {
            loadCoach();

        }
    }, [coachId]); // Effect will run whenever coachId changes


    return (
        <div>
            <div className="container-coach-heading">
                <h2 className="display-2 coach-title" id="coach-name">{coachName}</h2>
                <hr className="featurette-divider" />
            </div>
            <div className="row">
                <div className="col col-text-left" style={{ marginRight: '20px', paddingRight: '60px', borderRight: '1px solid var(--ua-blue)' }}>
                    <h3 className="featurette-heading fw-normal lh-1" style={{ marginBottom: '45px' }}>
                        About Me
                    </h3>
                    <p className="featurette-description" id="about-content">
                        {coachAbout}
                    </p>
                </div>
                <div className="col svg-col-right">
                    <svg
                        className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        width="500"
                        height="500"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="Placeholder: 500x500"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    >
                        <title>Placeholder</title>
                        <image
                            className="coach-image"
                            xlinkHref={coachImage1}
                            width="100%"
                            height="100%"
                            id="image-2"
                        />
                    </svg>
                </div>
            </div>
            <hr className="featurette-divider" />
            <div className="row">
                <div className="col svg-col-left">
                    <svg
                        className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        width="500"
                        height="500"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="Placeholder: 500x500"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        style={{ width: '100%', height: '100%' }}
                    >
                        <title>Placeholder</title>
                        <image
                            className="coach-image"
                            xlinkHref={coachImage2}
                            width="100%"
                            height="100%"
                            id="image-2"
                        />
                    </svg>
                </div>
                <div className="col col-text-right">
                    <h3 className="featurette-heading fw-normal lh-1" style={{ marginBottom: '45px' }}>
                        What Universal Athletics Means to Me
                    </h3>
                    <p className="featurette-description" id="ua-meaning-content">
                        {coachUaMeaning}
                    </p>
                </div>
            </div>
            <hr className="featurette-divider" />
            <div className="row row-heading">
                <div className="col col-sports-header">
                    <h2 className="featurette-heading fw-normal lh-1 sports-heading">Sports</h2>
                </div>
                <div className="col">
                    <h2 className="featurette-heading fw-normal lh-1 contact-heading">Contact</h2>
                </div>
            </div>
            <div className="row row-content">
                <div className="col col-sports d-flex flex-wrap" style={{ width: "wra" }}>
                    <div className="featurette-list">
                        <div className="list-container">
                            <ul id="sports-list">
                                {coachSports.map((sport, index) => (
                                    <li key={index}>{sport}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col col-contact">
                    <div className="contact-container">
                        <p className="contact-item">
                            Phone: <span className="contact-content" id="phone">{coachPhone}</span>
                        </p>
                        <p className="contact-item">
                            Email: <span className="contact-content" id="email">{coachEmail}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoachPage;