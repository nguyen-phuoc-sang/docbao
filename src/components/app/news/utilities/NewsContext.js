import React, { useState, createContext }from 'react'
import AxiosInstance from '../../axiosClient/AxiosInstance';

export const NewsContext = createContext();

export const NewsProvider = (props) => {
    const {children} = props;

    // lấy danh sách bài viết
    const getNews = async () => {
      try {
        const response = await AxiosInstance().get('/product/getAllProduct');
        return response.products;
      } catch (error) {
        console.log('getNews err',error);
      }
      return [];
    }

    // lấy thông tin chi tiết
    const getDetail = async (id) => {
      try {
        const response = await AxiosInstance().get(`product/${id}/detail/`);
        return response.products;
      } catch (error) {
        console.log('getDetail err',error);
      }
      return null;
    }

    // upload hình ảnh lên sever
    const upload = async (formData) => {
      try {
        const response = await AxiosInstance('multipart/form-data').post(`media/upload`, formData);
        return response.data;
      } catch (error) {
        console.log('upload err',error);
      }
      return null;
    }

    // lưu bài viết
    const saveNews  =async (title, content, image) => {
      try {
        const body = {
          title: title,
          content: content,
          image: image,
        }
        await AxiosInstance().post('/articles', body);
        return true;
      } catch (error) {
        console.log('lỗi', error)
      }
      return false
    }

  return (
    <NewsContext.Provider value={{getNews, getDetail, upload, saveNews}}>
        {children}
    </NewsContext.Provider>
  )
}
