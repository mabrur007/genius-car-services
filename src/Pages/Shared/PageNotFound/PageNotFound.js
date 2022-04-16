import React from 'react';
import pageNotFound from '../../../images/404.jpg';

const PageNotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center py-4'>Page Not Found</h2>
            <img className='w-100' src={pageNotFound} alt="404" />
        </div>
    );
};

export default PageNotFound;