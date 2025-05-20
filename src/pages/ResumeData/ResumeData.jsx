import React from 'react';
import './ResumeData.css';
import { FaGithubSquare, FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
function ResumeData() {
    return (
        <>
            <div className='conatnier'>
                <h2 className='mainheading'>My Resume Data</h2>
                <div className='resume-cont'>
                    <div className='resume-left'>
                        <div className='resume-left-img'>
                            <img src='/assets/images/model.png' alt='profile' />
                        </div>
                        <div className='resume-left-info'>
                            <h5>Surendra Ranwa</h5>
                            <span>React Developer</span>
                            <div className='resume-left-contact'>
                                <div className='resume-left-contact-item'>
                                    <p className='resume-left-contact-itemleft'>Email</p>
                                    <p className='resume-left-contact-itemlright'>Surendraranwa20@gmail.com</p>
                                </div>
                                <div className='resume-left-contact-item'>
                                    <p className='resume-left-contact-itemleft'>phone</p>
                                    <p className='resume-left-contact-itemlright'>9358175026</p>
                                </div>
                                <div className='resume-left-contact-item'>
                                    <p className='resume-left-contact-itemleft'>Linkdin</p>
                                    <p className='resume-left-contact-itemlright'>/surendraranwa</p>
                                </div>
                                <div className='resume-left-contact-item'>
                                    <p className='resume-left-contact-itemleft'>Github</p>
                                    <p className='resume-left-contact-itemlright'>/surendraranwa</p>
                                </div>
                            </div>
                            <div className='resume-left-social'>
                                <FaInstagramSquare />
                                <FaGithubSquare />
                                <FaLinkedin />
                                <FaTwitterSquare />
                            </div>
                            <button className='download-resume'>
                                Download Resume <img src="/assets/images/downloadresume.png" alt="resume icon" />
                            </button>
                        </div>
                    </div>
                    <div className='resume-right'>bye</div>
                </div>
            </div>
        </>

    )
}

export default ResumeData;