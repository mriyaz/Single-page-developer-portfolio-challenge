import React from 'react';
import githubIcon from '../assets/images/icon-github.svg';
import frontendMentorIcon from '../assets/images/icon-frontend-mentor.svg';
import linkedinIcon from '../assets/images/icon-linkedin.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';

const SocialHeader = () => {
    return (
        <div className='flex flex-col justify-between items-center md:flex-row p-4'>
            <h2 className='text-2xl font-semibold mb-4 text-white md:text-3xl'>adamkeyes</h2>
            <div className='flex items-center justify-between gap-6'>

                <a href="https://www.github.com" target='_blank' rel='noopener noreferrer'
                    className='hover:opacity-75 transition-opacity duration-300'>
                    <img src={githubIcon} alt="github icon" />
                </a>

                <a href="https://www.frontendmentor.com" target='_blank' rel='noopener noreferrer'
                    className='hover:opacity-75 transition-opacity duration-300'>
                    <img src={frontendMentorIcon} alt="frontend mentor icon" />
                </a>
                <a href="https://www.linkedin.com" target='_blank' rel='noopener noreferrer'
                    className='hover:opacity-75 transition-opacity duration-300'>
                    <img src={linkedinIcon} alt="linkedin icon" />
                </a>
                <a href="https://www.twitter.com" target='_blank' rel='noopener noreferrer'
                    className='hover:opacity-75 transition-opacity duration-300'>
                    <img src={twitterIcon} alt="twitter icon" className='bg-white' />
                </a>
            </div>

        </div>
    )
}

export default SocialHeader