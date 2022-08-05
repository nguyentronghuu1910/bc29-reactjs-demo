import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { USER_INFO_KEY } from '../../constants/common';
import { loginApi } from '../../services/user';
import { setUserInfoAction } from '../../store/actions/user.action';
// import { Value } from 'sass';

export default function Login() {

   const dispatch = useDispatch();
   const navigate = useNavigate()
   const [state, setState] = useState({
      taiKhoan: '',
      matKhau: '',
   });

   const handleChange = (event) => {
      const { name, value } = event.target;
      setState({
         ...state,
         [name]: value,
      })
   }
   const handleSubmit = async (event) => {

      event.preventDefault();

      const result = await loginApi(state);

      localStorage.setItem(USER_INFO_KEY, JSON.stringify(result.data.content));
      dispatch(setUserInfoAction(result.data.content))
      navigate("/")

      // console.log(result);
   };
   return <form onSubmit={handleSubmit} className='w-25 mx-auto my-5'>
      <div className='form-group'>
         <label >Tài Khoản</label>
         <input
            onChange={handleChange}
            name='taiKhoan'
            type="text"
            className='form-control'
         />
      </div>
      <div className='form-group'>
         <label >Mật Khẩu</label>
         <input
            onChange={handleChange}
            name='matKhau'
            type="text"
            className='form-control'
         />
      </div>
      <button className="btn btn-success">LOGIN</button>
   </form>

}
