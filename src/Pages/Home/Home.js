import React from 'react';
import AddReview from '../Dashboard/AddReview';
import AllReviews from '../Dashboard/AllReviews';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Summaries from './Summaries';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Summaries></Summaries>
            {/* <AddReview></AddReview> */}
            <AllReviews></AllReviews>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;