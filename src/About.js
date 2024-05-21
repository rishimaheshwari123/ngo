import React from 'react'
import ngo from './img/Ngo.png'

const About = () => {
    return (
        <>
            <div id='about'>

                <div className='about d-block'>
                    <div className='row '>
                    <h1 className='m-2'>About Us</h1>
                        <div className='col'>
                           <center> <img src={ngo} className='aboutpic' /></center>
                        </div>
                    </div>
                    <br/>
                    <div className='row'>
                        <div className='col m-4 '>
                      
                            <h3>Gramin Vikas Sanstha </h3>
                            <p> Gramin Vikas Sanstha is a non-government, non-political, not-for-profit organization, registered under The
                                Public Charitable Trust Act and the Societies Registration Act (1860). Gramin Vikas Santha is an NGO,
                                striving towards collective integrated development in Jawhar Tahsil. Gramin Vikas Santha is a non-profit
                                organization registered in 2012. The organization is established with the prime focus of the tribe’s development.
                                Our common interest and only aim is the “Empowerment of SHG group the men and women from rural and tribal society”.
                                While ever we performing some or the other powerful activities, towards children primary to higher education,
                                health, men’s and Women's generate employments and Development, in their local area, they felt the need to
                                establish an organization to work for conveying & implementing the various programs, government schemes at
                                the grass root level for the upliftment of man and women throughout Maharashtra. Since then, with a vision
                                of a society where every tribe lives with freedom and dignity, Gramin Vikas Santha has made continuous efforts
                                to address varied facets of life. Community participation and holistic development approach are the keywords
                                that we use in our organization. In all programs, we try to motivate participants, and beneficiaries to participate
                                actively in the process of their development. We as an organization play the role of facilitator and motivator.
                                Our thrust is to make them self-reliant and there should be sustainable development of the society.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;