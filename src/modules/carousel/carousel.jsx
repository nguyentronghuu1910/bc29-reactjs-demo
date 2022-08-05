import React from 'react'
import { Carousel as CarouselAntd } from 'antd';

const contentStyle = {
   with: "100%",
   height: '600px',
   objectFit: 'cover',
};

export default function Carousel() {
   const onChange = (currentSlide) => {
      console.log(currentSlide);
   };

   return (
      <CarouselAntd autoplay afterChange={onChange}>
         <div>
            <img style={contentStyle}
               src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fphim.cafephim.vn%2Fwp-content%2Fuploads%2F2016%2F11%2FKubo-Banner.jpg&f=1&nofb=1" alt="#" />
         </div>
         <div>
            <img style={contentStyle}
               src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fphim.cafephim.vn%2Fwp-content%2Fuploads%2F2016%2F12%2FInferno_Banner-768x300.png&f=1&nofb=1" alt="#" />
         </div>
         <div>
            <img style={contentStyle}
               src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3img.vcdn.vn%2F123phim%2F2016%2F05%2Fthe-conjuring-2-14633888773011.jpg&f=1&nofb=1" alt="#" />
         </div>
      </CarouselAntd>
   );
}
