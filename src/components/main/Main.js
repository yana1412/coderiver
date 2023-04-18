import React from 'react'

import { AnimationOnScroll } from 'react-animation-on-scroll'

import icon from '../../images/icon.svg'
import Image from '../image/Image'
import imgSrc from '../../images/create-img.jpg'

import './style.css'

function Main() {
    return (
        <div className="main">
            <svg className="line" width="1349" height="349" viewBox="0 0 1349 349" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-172 182.966C-161.998 182.966 -142.94 198.142 -142.94 198.142C-127.619 204.762 -103.708 215.094 -103.708 215.094C-103.708 215.094 -72.8058 227.298 -52.2069 232.369C-30.1537 237.798 5.2679 241.248 5.2679 241.248C78.651 247.066 150.343 261.713 191.254 210.574C198.413 201.625 201.166 185.872 185.442 185.872C169.586 185.872 162.421 189.718 149.116 196.043C126.303 206.889 104.942 223.371 101.328 239.634C96.413 261.753 91.9132 302.171 106.979 321.003C129.659 349.353 220.314 345.543 220.314 345.543C220.314 345.543 312.302 343.21 369.813 331.82C394.519 326.927 432.454 316.482 432.454 316.482L510.917 286.938L607.072 247.5C607.072 247.5 637.513 231.592 657.072 221.5C686.096 206.524 731.572 183.5 731.572 183.5C731.572 183.5 769.041 166.71 793.072 156C823.587 142.399 871.265 121.294 871.265 121.294C871.265 121.294 915.835 105.191 938.104 97.2384C955.23 91.122 973.641 88.0635 990.412 80.6095C1010.66 71.6103 1054.18 62.5275 1054.18 62.5275C1054.18 62.5275 1096.58 49.7304 1124.09 42.8311C1174.56 30.1743 1302.95 17.0417 1345.07 3" stroke="#647CE9" strokeWidth="6" strokeLinecap="round" />
            </svg>
            <div className="container">
                <div className="main__wrapper">
                    <div className="main__content">
                        <div className="main__icon">
                            <img className="icon" src={icon} alt="icon" />
                            <div className="main__text">App available</div>
                        </div>
                        <AnimationOnScroll animateIn="animate__bounceIn">
                            <h1 className="main__title title ">
                                CHOOSE YOUR WINTER
                                <div className="span__wrapper">
                                    <span className="main__span">LOOK </span>
                                    <span>*</span>
                                </div>
                                APPAREL
                            </h1>
                        </AnimationOnScroll>
                    </div>
                    <div className="main__img">
                        <Image bgImage={imgSrc} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main