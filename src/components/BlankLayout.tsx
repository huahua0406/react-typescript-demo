import React from 'react';
import { renderRoutes } from 'react-router-config';
interface IProps {
    route: any
}

const BlankLayout: React.FC <IProps> = ({ route }) => ( <> { renderRoutes(route.routes) } </>)
export default React.memo(BlankLayout);