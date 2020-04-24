import React from 'react';
import { renderRoutes } from "react-router-config";
function Layout(props) {
    const { route } = props;
    return (
        <div>
            {renderRoutes(route.routes)}
        </div>
    )
}

export default React.memo(Layout);