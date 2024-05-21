import React from 'react'
import appeal from './img/appeaal.jpg';

const Appeal = () => {
    return (
        <div id='appeal'>

            <center><h1> Appeal</h1></center>
            <div className='m-2'>
                <p>  The ways, you can contribute in our work
                    The Gramin Vikas sanstha is working with a definite objective to achieve a set goal of Man’s and women’s SHG Groups empowerment. Sense of social binding and motivation to do something for our own community drives the volunteers to do dedicated efforts to achieve the success. The organization has developed a remarkable rapport with the members of society and government.  All the projects run totally on the donations by the society members.  All donations are exempted under Sec. 12A, 80G, CSR of Income Tax Act and Government scheme funding with  NGO Darpan, e-anudan.
                    Yes, 'We Together' can make a change...
                    You can give your skills and knowledge to organization
                    You can give your time for organization work
                    You can contribute by sponsoring specific projects
                    You can take responsibility of specific event such as workshop, seminar
                    You can support by providing medical and educational aid
                    You can contribute for space and land for our projects
                    You can contribute for administrative cost of organization
                    You can provide financial support to activities of organization..
                </p>
            </div>
           <center> <img src={appeal} className='imga' /></center>
        </div>
    )
}

export default Appeal;