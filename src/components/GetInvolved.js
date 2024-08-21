import React, { useState, useEffect } from 'react'
import accessibleAthletics from '../images/accessibleAthletics.png';
import accessibleAthletics1 from '../images/accessibleAthletics1.png';
import accessibleAthletics2 from '../images/accessibleAthletics2.png';
import accessibleAthletics3 from '../images/accessibleAthletics3.png';

const GetInvolved = () => {


    return (
        <div>
            <div className="container-coach-heading">
                <h2 className="display-2 coach-title" id="coach-name">Join Our Team!</h2>
                <div className="header-description-container">
                    <p className="header-description">
                        Do you have a love for sports, teaching, and pushing society's agenda forward? If so, UA is the team for you! At UA we give you the tools to be your own boss while working with our organization to learn more of the business side of things. We are always looking for more coaches and teachers. We also have spots available in our marketing and social media departments as we are hoping to transcend ourselves and team to uncharted heights. </p>
                </div>
                <hr className="featurette-divider" />
            </div>
            <div className="row">
                <div className="col col-text-left">
                    <div className="margining">
                        <h3 className="featurette-heading fw-normal lh-2" style={{ marginBottom: '45px', marginTop: '40px' }}>
                            Help us Inspire Others!
                        </h3>
                    </div>
                </div>
                <div className="col svg-col-right align-items-center">
                    <div className="margining text-left" style={{ marginLeft: '0px' }}>
                        <p>
                            As a start up organization determined to influencing the next generation, Universal Athletics is open to growing our team to help us reach new heights. We would love to have you join us in our mission to inspire others.
                        </p>
                    </div>
                </div>
                <div className='row'>
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
                                xlinkHref={accessibleAthletics1}
                                width="100%"
                                height="100%"
                                id="image-2"
                            />
                        </svg>
                    </div>
                    <div className="col col-text-right">
                        <a className = "app-link" href="https://docs.google.com/forms/d/e/1FAIpQLScRVGezFIvbCqM6GlfPGZJR8rpxlYIY9rtEr9tvN6N2m8UA-w/viewform">
                            <h3 className="featurette-heading fw-normal lh-2" style={{ marginBottom: '45px', marginTop: '40px' }}>
                                Click Here to Fill Out an Application!
                            </h3>
                        </a>
                    </div>
                </div>
            </div>
            <hr className="featurette-divider" />
        </div>
    )
}

export default GetInvolved;

