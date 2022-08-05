import { request } from "../configs/axios"

const fetchMovieShowTimesApi = (movieId) => {
   return request({
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`,
      method: 'GET',
   })
}

export { fetchMovieShowTimesApi }