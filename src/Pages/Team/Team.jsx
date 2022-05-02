import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <>
    <section id="team" className="team skewY-bg">
        <div className="container">
            <div className="section-title">
                <h2>Team</h2>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, sunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, assumenda mollitia praesentium excepturi iure neque earum? Corrupti, molestias dolorum.</p>
            </div>
            <div className="row">

                <div className="col-lg-3  col-md-6 d-flex align-items-stretch">
                    <div className="member">
                        <div className="member-img">
                            <img className="img-fluid" src="./img/team-1.jpg" alt="team-1" />
                            <div className="social">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="member-info">
                            <h4>Weather Hitw</h4>
                            <p>Assistant Director</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                    <div className="member">
                        <div className="member-img">
                            <img className="img-fluid" src="./img/team-2.jpg" alt="team-2" />
                            <div className="social">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="member-info">
                            <h4>Weather Hitw</h4>
                            <p>Assistant Director</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                    <div className="member">
                        <div className="member-img">
                            <img className="img-fluid" src="./img/team-3.jpg" alt="team-3" />
                            <div className="social">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="member-info">
                            <h4>Weather Hitw</h4>
                            <p>Assistant Director</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                    <div className="member">
                        <div className="member-img">
                            <img className="img-fluid" src="./img/team-4.jpg" alt="team-4" />
                            <div className="social">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="member-info">
                            <h4>Weather Hitw</h4>
                            <p>Assistant Director</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Team