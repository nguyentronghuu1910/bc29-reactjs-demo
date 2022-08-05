import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Chair from '../../modules/chair/chair';
import { bookingTicketApi, fetchRoomListApi } from '../../services/booking';
import './index.scss';

export default function Booking() {
   const [danhSachGhe, setDanhSachGhe] = useState([]);
   const [roomList, setRoomList] = useState();
   const params = useParams();
   const navigate = useNavigate()

   useEffect(() => {
      fetchRoomList();
   }, []);

   const fetchRoomList = async () => {
      const result = await fetchRoomListApi(params.maLichChieu);

      setRoomList(result.data.content);
   };

   const handleSelect = (selectedChair) => {
      const data = [...danhSachGhe];

      const idx = data.findIndex(
         (ele) => ele.tenGhe === selectedChair.tenGhe);

      if (idx !== -1) {
         data.splice(idx, 1);
      } else {
         data.push(selectedChair);
      }

      setDanhSachGhe(data);

   };

   const renderLoader = () => {
      return (
         <div className='loader'></div>
      );
   };

   const handleBookingTicket = async () => {
      const danhSachVe = danhSachGhe.map(ele => {
         return {
            maGhe: ele.maGhe,
            giaVe: ele.giaVe,
         };
      });

      const submitData = {
         maLichChieu: params.maLichChieu,
         danhSachVe,
      };
      await bookingTicketApi(submitData);
      alert('Đặt Vé Thành Công.')
      navigate('/')
   };
   return roomList ? (
      <div
         className='row w-75 mx-auto my-5'
      >
         <div className='col-8'>
            {
               roomList.danhSachGhe.map((ele, idx) => {
                  return (
                     <React.Fragment>

                        <Chair
                           handleSelect={handleSelect}
                           key={ele.tenGhe} item={ele} />
                        {(idx + 1) % 16 === 0 && <br />}
                     </React.Fragment>
                  );
               })
            }

         </div>
         <div className='col-4'>
            <img
               className='img-fluid rounded'
               src={roomList.thongTinPhim.hinhAnh} />

            <h4>Tên Phim:{roomList.thongTinPhim.tenPhim}</h4>
            <h5>Mổ tả:{roomList.thongTinPhim.mota}</h5>
            <p>Ghế: {danhSachGhe.map((ele) => (
               <span
                  key={ele.tenGhe}
                  className='badge badge-success'
               >{ele.tenGhe}</span>
            ))}</p>
            <p>Sum:
               {danhSachGhe.reduce((previousValue, currentValue) => {
                  previousValue += currentValue.giaVe;

                  return previousValue;
               }, 0)
                  .toLocaleString()}
            </p>
            <button
               onClick={handleBookingTicket}
               className="btn btn-info">ĐẶT VÉ</button>
         </div>
      </div>
   ) : renderLoader();
}