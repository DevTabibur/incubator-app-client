import React from 'react';
import './Team.css';
import Team1 from '../../Assets/Images/team-1.jpg';
import Team2 from '../../Assets/Images/team-2.jpg';
import Team3 from '../../Assets/Images/team-3.jpg';
import Team4 from '../../Assets/Images/team-4.jpg';

const Team = () => {
  return (
    <>
    <section id="team" className="team skewY-bg">
        <div className="container">
            <div className="section-title">
                <h2>Team</h2>
                <p className="mb-0">Meet Our professional Partners!</p>
            </div>
            <div className="row">

                <div className="col-lg-3  col-md-6 d-flex align-items-stretch">
                    <div className="member">
                        <div className="member-img">
                            <img className="img-fluid" src={Team1} alt="team-1" />
                            <div className="social">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="member-info">
                            <h4>Johny Depp</h4>
                            <p>Assistant Director</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                    <div className="member">
                        <div className="member-img">
                            <img className="img-fluid" src={Team2} alt="team-2" />
                            <div className="social">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="member-info">
                            <h4>Amber Heard</h4>
                            <p>Assistant Director</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                    <div className="member">
                        <div className="member-img">
                            <img className="img-fluid" src={Team3} alt="team-3" />
                            <div className="social">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="member-info">
                            <h4>Michael Jackson</h4>
                            <p>Assistant Director</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                    <div className="member">
                        <div className="member-img">
                            <img className="img-fluid" src={Team4} alt="team-4" />
                            <div className="social">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="member-info">
                            <h4>Natalia Jesmin</h4>
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