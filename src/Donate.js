import React from 'react'
import gif1 from './img/donate.gif'
import gif2 from './img/volunteering.gif'
const Donate = () => {
    return (
        <div id='donate'>
         <center>   <h1>Donations</h1></center>
            <center><i>Yes,</i><b>'We Together'</b><i> can make a change</i></center>
            <div className='para1 m-4'><i> Thank you very much for choosing to arrive on this page.
                It is your greatness that you think above yourself. Our existence is only because of you like kind hearted donors,
                your support & donations. That helps us to extend our social work beyond barriers of short of resources.
                Beyond your esteem help by way of donations we expect you to visit our project/s so as to have further satisfaction
                of having donated for the cause.</i></div>
            <br />
            <h3>You can donate in any one of the following suitable methods:</h3>


            <div class="container">
                <div class="row">
                    <div class="col m-2">
                        
                        Send your Donation Cheque to Us
                        <h4>Put your Donation Cheque to any State Bank of India Branch</h4>
                        <b> Kindly give donation by putting your cheque in any one of the 3000 branches of State Bank of India for the credit
                            of following account details:</b>
                        <img src={gif1} className='gif1' />
                        <br />
                        Account Title: Gramin Vikas Sanstha, jawhar<br />
                        <b>Bank:</b> State Bank of India<br />
                        <b>  Branch:</b> Jawhar<br />
                        <b>Account Number:</b> 000000000000<br />

                    </div>
                    <div class="col m-2">
                        <h4>Send your Donation Cheque to Us</h4><br />
                        <b> Kindly give donation by issuing a cheque in favour of Gramin Vikas Sanstha, jawhar and sending it to the following address:
                            Gramin Vikas Sanstha, jawhar</b><br />
                        <img src={gif2} className='gif2' />
                        <br/>
                        <b> Main Branch:</b><br />
                        Mrs. Vijaya Mukane,<br />
                        Rajgad, Gorwadi chouk.<br />
                        <br />
                        Gorwadi tal & post Jawhar Dist Palghar<br />
                        Maharashtra, India, Pin. 401603.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate;