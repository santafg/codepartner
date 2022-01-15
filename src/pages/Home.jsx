import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import MobileHeader from '../components/Header/MobileHeader'
import JoinUs from '../components/JoinUs/JoinUs'
import OurAchivement from '../components/OurAchivement/OurAchivement'
import OurNews from '../components/OurNews/OurNews'
import OurTeam from '../components/OurTeam/OurTeam'
import Testimonials from '../components/Testimonials/Testimonials'
import WhatWeDo from '../components/WhatWeDo/WhatWeDo'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'

const Home = () => {
    return (
        <>
            <div>
                <Header/>
            </div>
            <div>
                <MobileHeader/>
            </div>
             <div>
                <Banner/>
            </div>
            <div>
                <WhatWeDo/>
            </div>
            <div>
                <AboutUs/>
            </div>
            <div>
                <OurAchivement/>
            </div>
            <div>
                <WhyChooseUs/>
            </div>
            <div>
                <OurTeam/>
            </div>
            <div>
                <Testimonials/>
            </div>
            <div>
                <OurNews/>
            </div>
            <div>
                <JoinUs/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default Home
