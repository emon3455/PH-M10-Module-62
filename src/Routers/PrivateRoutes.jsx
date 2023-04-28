import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const PrivateRoutes = () => {

    const {user} = useContext(AuthContext);

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoutes;