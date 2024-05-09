import React, { useState, createContext } from 'react'
import AxiosInstance from '../../axiosClient/AxiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const { children } = props;
    const [isLogin, setIsLogin] = useState(false);

    
    const login = async (email, password) => {
        try {
            const response = await AxiosInstance().post('/user/login',
                {
                    email: email,
                    password: password,
                });
            const token = response.data.token;
            await AsyncStorage.setItem('token', token); // lưu lại token đó
            setIsLogin(true);  // chuyển trạng thái login
            return true;
        } catch (error) {
            console.log('lỗi', error);
        }
        return false
    }

    const signup = async (email, password) => {
        try {
            await AxiosInstance().post('/user/register',
                {
                    email: email,
                    password: password,
                    name : 'haha'
                });
            return true;
        } catch (error) {
            console.log('lỗi đk', error);
        }
        return false
    }

    return (
        <UserContext.Provider value={{ isLogin, setIsLogin, login, signup }}>
            {children}
        </UserContext.Provider>
    )
}