import React from 'react';
import { useLoaderData} from 'react-router-dom';
import NewsCard from '../../NewsCard/NewsCard';

const Catagories = () => {

    const catagoryNews = useLoaderData();

    return (
        <div>
            <h4 className='text-secondary'>
                Dragon News Home
            </h4>
            <div className="">
                {
                    catagoryNews.map(news=> <NewsCard keey={news._id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default Catagories;