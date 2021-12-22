import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { FirstLaba } from './LabsPage/FirstLaba';
import { ThirdLaba } from './LabsPage/ThirdLaba';
import { FourthLaba } from './LabsPage/FourthLaba';
import MainPage from './MainPage';
import SecondLaba from './LabsPage/SecondLaba';

const AppRouter = () => {
    return (
        <>
        <MainPage />
            <Switch>
                <Route exact path='/1-laba'>
                    <FirstLaba />
                </Route>
                {/* <Route exact path='/2-laba'>
                    <SecondLaba />
                </Route> */}
                <Route exact path='/3-laba'>
                    <ThirdLaba />
                </Route>
                <Route exact path='/4-laba'>
                    <FourthLaba />
                </Route>
            </Switch>
        </>
    )
}

export default AppRouter;