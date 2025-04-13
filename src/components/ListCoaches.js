import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import maxPicture from "../images/profiles/max_robinson_profile.jpg";
import elliePicture from "../images/profiles/ellie_robinson_profile.jpg";
import jessePicture from "../images/profiles/jesse_pladsen_profile.png";
import anthonyPicture from "../images/profiles/anthony_potratz_profile.png";
import tysonPicture from "../images/profiles/tyson_luu_profile.jpg";
import bellaPicture from "../images/profiles/bella_tranquilano_profile.jpg";
import natePicture from "../images/profiles/nate_birhane_profile.jpg";
import benPicture from "../images/profiles/ben_towle_profile.jpg";
import cadenPicture from "../images/profiles/caden_heck_profile.jpg";
import ryanPicture from "../images/profiles/ryan_pangier_profile.jpg";
import mekhiPicture from "../images/profiles/mekhi_holmes_profile.jpg";
import gavinPicture from "../images/profiles/gavin_hegstrom_profile.jpg";
import aliviaPicture from "../images/profiles/alivia_eaton_profile.jpg";
import zachPicture from "../images/profiles/zach_benge_profile.jpg";
import cjPicture from "../images/profiles/cj_hangartner_profile.jpg";
import blanePicture from "../images/profiles/blane_wallace_profile.jpg";



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
        "nate-birhane": natePicture,
        "ryan-pangier": ryanPicture,
        "bella-tranquilano": bellaPicture, 
        "gavin-hegstrom" : gavinPicture,
        "caden-heck": cadenPicture,
        "alivia-eaton": aliviaPicture,
        "zach-benge": zachPicture,
        "cj-hangartner": cjPicture,
        "mekhi-holmes": mekhiPicture,
        "blane-wallace": blanePicture,
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