import React from "react";
import { Route } from "react-router-dom";

// import 
import DefaultLayout from "../layouts/default.layout"

const DefaultHOC = ({component: Component, ...rest}) => {

    return (
        <>
            <Route {...rest}
                component = {(props) =>(
                    <DefaultLayout>
                        <Component {...props} />
                    </DefaultLayout>
                )}
            />
        </>
    );
};

export default DefaultHOC;

