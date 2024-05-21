import React from 'react'
import p1 from './img/people5.jpg'
import p2 from './img/people3.jpg'
import p3 from './img/telling.jpg'
import p4 from './img/panchayat.jpg'
import p5 from './img/meeting.jpg'
import p6 from './img/inclass.jpg'
import p7 from './img/class.jpg'
import p8 from './img/class3.jpg'
import p9 from './img/class4.jpg'

import pc1 from './img/pagee.jpg';
import pc2 from './img/group.jpg';
import pc3 from './img/group2.jpg';
import pc4 from './img/group3.jpg';
import pc5 from './img/group4.jpg';

import pic1 from './img/grass.jpg';
import pic2 from './img/farmsown.jpg';
import pic3 from './img/productgal.jpg';
import pic4 from './img/farming.jpg';
import pic5 from './img/machine.jpg';
import pic6 from './img/infarm.jpg';

import i from './img/farming2.jpg';
import i2 from './img/2people.jpg';
import i3 from './img/farm.jpg';
import i4 from './img/florist.jpg';
import i5 from './img/grampanchayat.jpg';
import i6 from './img/villager.jpg';



const Gallery = () => {
    return (
        <div id='gallery'>

            <div className='gallerypage'>
                <div className="photos-heading">
                    <h1>PHOTO GALLERY</h1>
                </div>
                <center>
                    <div class="warpper">
                        <input class="radio" id="one" name="group" type="radio" checked />
                        <input class="radio" id="two" name="group" type="radio" />
                        <input class="radio" id="three" name="group" type="radio" />
                        <div class="tabs">
                            <label class="tab" id="one-tab" for="one">Awareness</label>
                            <label class="tab" id="two-tab" for="two">Opportunities</label>
                            <label class="tab" id="three-tab" for="three">Development</label>
                        </div>

                        <div class="panels">
                            <div class="panel" id="one-panel">
                                <img id='photu' src={p1} />
                                <img id='photu' src={p2} />
                                <img id='photu' src={p3} />
                                <img id='photu' src={p4} />
                                <img id='photu' src={p5} />
                                <img id='photu' src={p6} />
                                <img id='photu' src={p7} />
                                <img id='photu' src={p8} />
                                <img id='photu' src={p9} />
                            </div>
                            <div class="panel" id="two-panel">
                                <img id='photu' src={pc1} />
                                <img id='photu' src={pc2} />
                                <img id='photu' src={pc3} />
                                <img id='photu' src={pc4} />
                                <img id='photu' src={pc5} />
                            </div>
                            <div class="panel" id="three-panel">
                                <img id='photu' src={pic1} />
                                <img id='photu' src={pic2} />
                                <img id='photu' src={pic3} />
                                <img id='photu' src={pic4} />
                                <img id='photu' src={pic5} />
                                <img id='photu' src={pic6} />
                            </div>
                        </div>
                    </div>
                </center>

                <div className='phonegallery'>
                    <center> <i>Awareness, Empowerment, Development</i></center>
                    <div class="scroll-container">
                        <img src={pc1} />
                        <img src={pc2} />
                        <img src={pc3} />
                        <img src={pc4} />
                        <img src={pc5} />
                        <img src={p1} />
                        <img src={p2} />
                        <img src={p3} />
                        <img src={p4} />
                        <img src={p5} />

                        <img src={i} />
                        <img src={i2} />
                        <img src={i3} />
                    </div>
                    <div class="scroll-container">
                        <img src={p6} />
                        <img src={p7} />
                        <img src={p8} />
                        <img src={p9} />
                        <img src={pic1} />
                        <img src={pic2} />
                        <img src={pic3} />
                        <img src={pic4} />
                        <img src={pic5} />

                        <img src={i4} />
                        <img src={i5} />
                        <img src={i6} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;














