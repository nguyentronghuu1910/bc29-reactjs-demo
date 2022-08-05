import { notification } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

export default function AdminGuard() {
   const userState = useSelector((state) => state.userReducer)
   const navigate = useNavigate()
   useEffect(() => {
      if (!userState.userInfo) {
         return navigate('/login');
      }
      if (
         userState.userInfo &&
         userState.userInfo.maLoaiNguoiDung !== 'QuanTri'
      ) {
         notification.warning({
            message: "Khách hàng không thể vào trang admin "
         });
         return navigate('/')
      }
   }, [])

   return <Outlet />
}
