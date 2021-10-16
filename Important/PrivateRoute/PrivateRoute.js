import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    // const {children, ...rest} = props;
    const { user } = useAuth();
    return (
        <Route
            {...rest}               //props hisabe abar chole jasse only private jake korte cai oita sara
            render={({ location }) => user.email ?
                children :                  //private router r pat r bitor ja ase ta e children
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;