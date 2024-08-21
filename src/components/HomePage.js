import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


import advanced from "../images/advancedAthleticsHome.png";
import advanced1 from "../images/advancedAthleticsHome1.png";
import advanced2 from "../images/advancedAthleticsHome2.png";
import advanced3 from "../images/advancedAthleticsHome3.png";
import accessible from "../images/accessibleAthleticsHome.png";
import accessible1 from "../images/accessibleAthleticsHome1.png";
import accessible2 from "../images/accessibleAthleticsHome2.png";
import accessible3 from "../images/accessibleAthleticsHome3.png";
import active from "../images/activeAthleticsHome.png";
import active1 from "../images/activeAthleticsHome1.png";
import active2 from "../images/activeAthleticsHome2.png";
import active3 from "../images/activeAthleticsHome3.png";
import maxPicture from "../images/maxPicture.jpg";
import elliePicture from "../images/elliePicture.jpg"
import benPicture from "../images/benPicture.jpg"
import jessePicture from "../images/jessePicture.png"
import anthonyPicture from "../images/anthonyPicture.png"
import tysonPicture from "../images/tysonPicture.jpg"
import missionStatement from "../images/missionStatement.png";

const HomePage = () => {
    const navigate = useNavigate();

   
    const selectCoach = (coachId) => {
        console.log("SELECTING COACH", coachId);
        const data = { coachId };
        navigate(`/coach/${coachId}`);
    };

    const selectAdvanced = () => {
        navigate("/advanced");
    };

    const selectAccessible = () => {
        navigate("/accessible");
    };

    const selectActive = () => {
        navigate("/active");
    };

    const viewCoaches = () => {
        navigate("/list-coaches");
    };

    const viewAllCoaches = () => {
        navigate("/view-coaches");
    };


    return (
        <main>
            <Carousel>
                <Carousel.Item>
                    <div className="carousel-item-container">
                        <img src={advanced} alt="Advanced Athletics Home" className="carousel-image top-left" />
                        <img src={advanced1} alt="Advanced Athletics Home 1" className="carousel-image top-right" />
                        <img src={advanced2} alt="Advanced Athletics Home 2" className="carousel-image bottom-left" />
                        <img src={advanced3} alt="Advanced Athletics Home 3" className="carousel-image bottom-right" />
                    </div>
                    <Carousel.Caption>
                        <h1 id="competitive-edge">Looking For a Competitive Edge?</h1>
                        <p className="carousel-description">Look Into Our Advanced Athletics Training Sessions!</p>
                        <p>
                            <a className="btn btn-lg btn-primary" onClick={selectAdvanced}>
                                Sign up today
                            </a>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-item-container">
                        <img src={accessible} alt="Accessible Athletics Home" className="carousel-image top-left" />
                        <img src={accessible1} alt="Accessible Athletics Home 1" className="carousel-image top-right" />
                        <img src={accessible2} alt="Accessible Athletics Home 2" className="carousel-image bottom-left" />
                        <img src={accessible3} alt="Accessible Athletics Home 3" className="carousel-image bottom-right" />
                    </div>
                    <Carousel.Caption className="text-start">
                        <h1>Check out our Accessible Athletics Programs!</h1>
                        <p className="carousel-description">
                            Our Accessible Athletics Programs aim to engage those with physical and/or mental disabilities
                        </p>
                        <p>
                            <a className="btn btn-lg btn-primary" onClick={selectAccessible}>
                                Learn more
                            </a>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-item-container">
                        <img src={active} alt="Active Athletics Home" className="carousel-image top-left" />
                        <img src={active1} alt="Active Athletics Home 1" className="carousel-image top-right" />
                        <img src={active2} alt="Active Athletics Home 2" className="carousel-image bottom-left" />
                        <img src={active3} alt="Active Athletics Home 3" className="carousel-image bottom-right" />
                    </div>
                    <Carousel.Caption className="text-end">
                        <h1>Staying or Getting in Shape?</h1>
                        <p className="carousel-description">Take a look at some of our Active Athletic Programs!</p>
                        <p>
                            <a className="btn btn-lg btn-primary" onClick={selectActive}>
                                Learn More
                            </a>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <hr className="featurette-divider" />


            <div className="container marketing" id="carousel-divider">
                <h2 className="h2 display-2">Meet Our Team!</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <a onClick={() => selectCoach("max-robinson")} className="coach-link" data-id="max-robinson">
                            <svg
                                className="bd-placeholder-img rounded-circle"
                                width="140"
                                height="140"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Placeholder"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                                <image
                                    xlinkHref={maxPicture}
                                    width="140"
                                    height="140"
                                    preserveAspectRatio="xMidYMid slice"
                                />
                            </svg>
                            <h2 className="fw-normal">Max Robinson</h2>
                            <p className="coach-spotlight-description">
                                Sports Admin Student at Simpson College
                            </p>
                            <p className="coach-spotlight-description">
                                Founder of Universal Athletics
                            </p>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <a onClick={() => selectCoach("ellie-robinson")} className="coach-link" data-id="ellie-robinson">
                            <svg
                                className="bd-placeholder-img rounded-circle"
                                width="140"
                                height="140"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Placeholder"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                                <image
                                    xlinkHref={elliePicture}
                                    width="140"
                                    height="140"
                                    preserveAspectRatio="xMidYMid slice"
                                />
                            </svg>
                            <h2 className="fw-normal">Ellie Robinson</h2>
                            <p>Communications Student at Drake University</p>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <a onClick={() => selectCoach("ben-towle")} className="coach-link" data-id="ben-towle">
                            <svg
                                className="bd-placeholder-img rounded-circle"
                                width="140"
                                height="140"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Placeholder"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                                <image
                                    xlinkHref={benPicture}
                                    width="140"
                                    height="140"
                                    preserveAspectRatio="xMidYMid slice"
                                />
                            </svg>
                            <h2 className="fw-normal">Ben Towle</h2>
                            <p>Computer Engineering Major at Iowa State University</p>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <a onClick={() => selectCoach("jesse-pladsen")} className="coach-link" data-id="jesse-pladsen">
                            <svg
                                className="bd-placeholder-img rounded-circle"
                                width="140"
                                height="140"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Placeholder"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                                <image
                                    xlinkHref={jessePicture}
                                    width="140"
                                    height="140"
                                    preserveAspectRatio="xMidYMid slice"
                                />
                            </svg>
                            <h2 className="fw-normal">Jesse Pladsen</h2>
                            <p>History Major at Simpson College</p>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <a onClick={() => selectCoach("anthony-potratz")} className="coach-link" data-id="anthony-potratz">
                            <svg
                                className="bd-placeholder-img rounded-circle"
                                width="140"
                                height="140"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Placeholder"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                                <image
                                    xlinkHref={anthonyPicture}
                                    width="140"
                                    height="140"
                                    preserveAspectRatio="xMidYMid slice"
                                />
                            </svg>
                            <h2 className="fw-normal">Anthony Potratz</h2>
                            <p>Math Major at Simpson College</p>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <a onClick={() => selectCoach("tyson-luu")} className="coach-link" data-id="tyson-luu">
                            <svg
                                className="bd-placeholder-img rounded-circle"
                                width="140"
                                height="140"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Placeholder"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                                <image
                                    xlinkHref={tysonPicture}
                                    width="140"
                                    height="140"
                                    preserveAspectRatio="xMidYMid slice"
                                />
                            </svg>
                            <h2 className="fw-normal">Tyson Luu</h2>
                            <p>Heath/Exercise Science Major at Iowa State University</p>
                        </a>
                    </div>
                    <a className="btn btn-lg btn-primary" id="view-all-coaches-btn" onClick={viewAllCoaches}>
                        View All Coaches
                    </a>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">Our Mission</h2>
                        <p className="lead">
                            At Universal Athletics, our mission is to create an inclusive environment and build a community where every person can thrive and excel in sports. We are dedicated to coaching, guiding, and helping kids develop their athletic skills, foster teamwork, and empower one another all while reaching their full potential. Our philosophy encourages our athletes to become champions of their own lives by cultivating a love for physical activity and the resilience to thrive in all endeavors beyond. Let's make sports accessible and enjoyable for all!
                        </p>
                    </div>
                    <div className="col-md-5">
                        <svg
                            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500"
                            height="500"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Placeholder: 500x500"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                            <title>Placeholder</title>
                            <image
                                className="mission-statement-image"
                                xlinkHref={missionStatement}
                                width="100%"
                                height="100%"
                                id="image-2"
                            />
                        </svg>
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="container contact-container">
                    <h2 className="featurette-heading">Get in Contact!</h2>
                    <p>
                        <span style={{ color: "var(--ua-green)" }}>Email:</span> universalathletics29@gmail.com
                    </p>
                </div>
                <hr className="featurette-divider" />
            </div>

        </main>
    );
};

export default HomePage;
