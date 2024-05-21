import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Programmes = () => {
    const location = useLocation();


    useEffect(() => {
        if (location.hash === '#projects') {
            const footerElement = document.getElementById('footer');
            if (footerElement) {
                footerElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    return (
        <div class="page">
            <div id='programmes'>
                <div className='programmes'>
                    <h1 className='m-5'><center>Our Programmes</center></h1>
                    <p className='m-5'>  Since the inception of the organization, programs like creating public awareness, and organizing various programs for the birth
                        anniversary of dignitaries were started. Through the organization, emphasis was placed on Sewing machine work classes,
                        agriculture subject workshops, and distribution of agricultural subject inputs. After the 10th class students were given guidance
                        camps about NEET and JEE and other exams. Teaching tribes students CBSC Bord base education, Various self-help groups have been
                        formed in the Jawhar Mokhada area. The process of creating various groups of primitive tribe Katkari and other tribes and
                        registering them, creating business opportunities for them, and raising their economic level by preparing various projects and
                        presenting them to the government and NGOs is underway. Today is the date the Rural Development Organization has prepared the
                        following group-based projects and sent them to the government for grants and same waiting for  CSR funds.
                    </p>
                    <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                <h5>Automatic Cashew Unit Project</h5>
                                <br /> – Nandgaon St. Jawhar Dist. Palghar  (Katkari Self Half Group)
                            </div>
                            <div class="col">
                                <h5>Automatic Cashew Unit Project</h5>
                                <br /> – Bramhangaon Mokhada District Palghar
                            </div>
                            <div class="col">
                                <h5>Brick Kiln Industry</h5>
                                <br /> - Nandgaon Jawhar Dist. Palghar (Katkari Self Half  Group)
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h5> Bakery Industry</h5>
                                <br /> - Khodala St. Mokhada District Palghar. (Women Self Half Group)
                            </div>
                            <div class="col">
                                <h5>Poultry Industry Group</h5>
                                <br /> - Swaminagar, Ase St. Mokhada (Men's Self Half Group)
                            </div>
                            <div className='col'>
                                <h5>Poultry Industry Group</h5>
                                <br />- Ase Ta. Mokhada (Men's Self Half Group)
                            </div>
                        </div>
                        <div class='row'>
                            <div className='col'>
                                <h5>Agarbatti Udyog</h5>
                                <br /> - Khodala St. Mokhada (Women Self Half Group)
                            </div>
                            <div className='col'>
                                <h5> Papad Udyog</h5>
                                <br /> - Khodala St. Mokhada (Women Self Half Group)
                            </div>
                            <div className='col'>
                                <h4>
                                    Groom to Bhagarmil</h4>
                                <br /> - FPO company registration Jawhar and Mokhada 500 farmers
                            </div>
                        </div>
                        <div class="row">
                            <div className='col'>
                                <h5> Oil Ghana Oil Industry</h5>
                                <br /> - Gomghar St. Mokhada (Women Self Half Group)
                            </div>
                            <div class="col">
                                <h5>  Bakery Industry</h5>
                                <br /> - Beriste St. Mokhada District Palghar. (Women Self Half  Group)
                            </div>
                        </div>
                    </div>
                </div>

                <div className='projects' id='projects'>
                    <center>        <h1 className='m-5'>Our Projects</h1></center>
                    <h6>Our upcoming project is waiting for CSR Funds </h6>
                    <ul>
                        <li>Vegetable Growers Union - FPO Company Registration Jawhar and  Mokhada 500 farmers  </li>
                        <li>Strawberry Growers Group - Collectively farmers benefit from 300      farmers in Jawhar and Mokhada areas give </li>
                        <li>Distribution of machinery and employment creation to       Katkari self helf group – Jawhar and Mokhada 100</li>
                        <li>Khadkhad Tourism Travel boat and tourism sports project to generate rural  employment</li>
                        <li>Chothachiwadi Tourism paramotoring project to generate rural employment</li>
                        <li> Tourism Shirpamal Hot Air Bolon project to generate rural employment</li>
                        <li>The part of Tourism, Hanuman Point skywalk and gardening with Planetarium & Elegant fish aquarium to generate rural employment</li>
                        <li>Sewing Industry Group - 200 women are registered in the Sewing Machine Group and the sewing project is proposed. </li>
                        <li>School Students Group – Waiting for CSR Fund for 11th to 12th      pass students NEET and JEE by giving CBSE Board English Medium
                            <br />
                            Education up to 100 students are offered education to prepare for the     exam. </li>
                        <li>Gir Cow/Buffalo JLG Registration – we working of Govt. Program        of Bank registration of 5 farmers JLG groups target is 1000 and registration. </li>
                        <li>Implementation of Milk Dairy Project - Targets for the creation of        project by creation of Milk Dairy FPO has been kept </li>
                        <li>CBSC central board residential education 1 th  to 12th class project</li>
                        <li>Medical College, Engineering & Polytechnic college project</li>
                        <li>B Pharmacy, D Pharmacy and Nursing Collage project</li>
                        <li>Medical Hospital 300 beds project & Medical camps </li>
                        <li>Fruit Trees, ornamental trees, forest tree Plantation project</li>
                        <li>Seed ball Plantation project</li>
                        <li>Bio-gas, solar chulha, solar home lights, and Street lights for tribal rural project</li>
                        <li>Land development and Water conservation </li>
                        <li>Major works – CNB, farm pond, roads, the dam projects</li>
                        <li>Adharsh Gaon projects</li>
                    </ul>

                    <p><b>Project Location:-</b> Location of various projects Jobless women in different villages of Jawhar Mokhada taluka and there are male savings groups</p>
                    <b> </b>
                    <div className='divbox'>
                        <div className='boxx'>
                            <b> Construction of various projects.</b>
                            <p>The work of meeting the women and men groups of various villages and preparing them for the enterprise preparing the project according to their interest and obtaining the necessary documents for the project is underway. After the project approval, the concerned groups will be assisted to obtain various government permits required for the said project. The organization will monitor the said projects for at least 5 years to continue the project at full capacity. The rural development organization will provide services like providing raw materials required for various projects and sending the finished concrete to the market. Rural development organization has an approach to solving various problems faced by the projects.   </p>
                        </div>
                        <div className='boxx_2'>
                            <b>Number of Targeted Beneficiaries. </b>
                            <p>The proposal aims to provide benefits to ten thousand women and men for various projects in the current financial year. Fundraising for projects - Fundraising for projects from various government schemes is underway along with the process of getting corporate CSR funds.  </p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Programmes;