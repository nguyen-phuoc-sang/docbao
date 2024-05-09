import React, {useContext} from 'react'
import UserNavigation from '../user/navigations/UserNavigation';
import NewsNavigation from '../news/navigations/NewsNavigation';
import {UserContext} from '../user/utilities/UserContext'
import { NavigationContainer } from '@react-navigation/native';

const AppNavigation = () => {
    const {isLogin} = useContext(UserContext);
  return (
    <NavigationContainer>
        {isLogin ? <NewsNavigation></NewsNavigation> : <UserNavigation></UserNavigation>}
    </NavigationContainer>
  )
}

export default AppNavigation