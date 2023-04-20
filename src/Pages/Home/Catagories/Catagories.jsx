import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../../NewsCard/NewsCard';

const Catagories = () => {

    const catagoryNews = useLoaderData();

    return (
        <div>
            <h2>
                This catagory has: {catagoryNews.length}
            </h2>
            <div className="">
                {
                    catagoryNews.map(news=> <NewsCard keey={news._id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default Catagories;