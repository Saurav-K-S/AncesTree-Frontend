import "./style.css";

const Circle = ({ deg, changeDeg }) => {
  return (
    <div
      className="circle z-10"
      style={{ transform: `translate(-50%) rotate(-${deg}deg)` }}
    >
        <img src="./assets/circular_element.png" alt="" srcset="" />
      {/* <a
        href="#profile"
        onClick={() => changeDeg(0)}
        className="item item1 "
        style={{ transform: `rotate(${deg}deg)` }}
      >
        <svg
          width="47"
          height="28"
          viewBox="0 0 47 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="13.5243"
            cy="13.7306"
            r="13.25"
            transform="rotate(0.335371 13.5243 13.7306)"
            stroke="black"
            stroke-width="0.5"
          />
          <circle
            cx="32.5243"
            cy="13.8415"
            r="13.25"
            transform="rotate(0.335371 32.5243 13.8415)"
            stroke="black"
            stroke-width="0.5"
          />
        </svg>
        Profile
      </a>
      <a
        href="#about"
        onClick={() => changeDeg(14)}
        className="item item2"
        style={{ transform: `rotate(${deg}deg)` }}
      >
        <svg
          width="29"
          height="43"
          viewBox="0 0 29 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.3871 0.877028L7.66166 29.2508C7.46337 30.245 8.48229 32.4487 14.1443 33.3098C19.8064 34.1708 21.0042 29.3136 20.8954 26.7773L23.4299 3.1431"
            stroke="black"
            stroke-width="0.8"
          />
          <path
            d="M1.25117 39.12C2.38926 37.0559 6.61938 33.1331 14.4351 33.9544C22.2508 34.7756 26.5289 40.1383 27.6909 42.7169"
            stroke="black"
            stroke-width="0.8"
          />
          <path
            d="M10.5313 28.7333C9.78311 28.4499 10.1531 25.0257 10.4317 23.349L18.0404 23.0226C17.9178 24.7583 17.6016 28.4168 17.3183 29.1649C16.9641 30.1001 11.4664 29.0874 10.5313 28.7333Z"
            stroke="black"
            stroke-width="0.8"
          />
        </svg>
        About
      </a>
      <a
        href="#contact"
        onClick={() => changeDeg(25)}
        className="item item3"
        style={{ transform: `rotate(${deg}deg)` }}
      >
        <svg
          width="40"
          height="62"
          viewBox="0 0 40 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="5.39882"
            y="41.4762"
            width="20.0197"
            height="13.8962"
            rx="3.6"
            transform="rotate(23.2775 5.39882 41.4762)"
            stroke="black"
            stroke-width="0.8"
          />
          <path
            d="M17.0241 42.043C17.2776 40.4842 18.0168 39.0634 18.648 37.6181C19.1612 36.4427 19.7248 35.4099 20.5369 34.4196C21.5981 33.1256 22.5664 31.7302 23.6812 30.4887C25.5759 28.3787 27.7536 26.902 30.0363 25.3267C30.8588 24.7592 32.0423 24.2487 32.7119 23.461"
            stroke="black"
            stroke-width="0.8"
            stroke-linecap="round"
          />
          <path
            d="M15.8113 34.8549C18.0864 29.5664 18.7815 23.5472 19.3939 17.8327C19.5793 16.1024 19.8803 14.2351 19.619 12.4887C19.5499 12.0269 19.4114 11.4791 19.3818 11.0601"
            stroke="black"
            stroke-width="0.8"
            stroke-linecap="round"
          />
          <path
            d="M10.0163 39.0284C10.1005 38.1129 10.0503 37.2134 10.1489 36.2785C10.4603 33.3243 10.9094 30.4025 10.9215 27.4393C10.9285 25.7253 10.7943 23.8492 10.491 22.1857C10.4129 21.7574 10.2833 20.6858 10.042 20.3745"
            stroke="black"
            stroke-width="0.8"
            stroke-linecap="round"
          />
          <path
            d="M8.35619 10.3164C8.08488 11.3458 7.40404 13.7272 6.11905 14.3205C5.02901 14.8238 8.1543 15.7191 8.17028 16.7311C8.18852 17.8851 9.12318 13.3206 10.3476 13.4653C9.6299 13.5386 9.2594 12.9907 8.88783 12.0732C8.51309 11.1479 8.45478 10.4861 8.35619 10.3164Z"
            stroke="black"
            stroke-width="0.8"
          />
          <path
            d="M22.7315 1.00097C21.8416 2.23369 19.6984 5.03808 17.3905 4.74421C15.4326 4.49493 20.0047 8.5583 19.5796 10.0218C19.0947 11.6905 22.6137 5.98577 24.4966 7.28256C23.3226 6.74889 22.9772 5.63454 22.7948 3.99003C22.6107 2.33146 22.8127 1.33181 22.7315 1.00097Z"
            stroke="black"
            stroke-width="0.8"
          />
          <path
            d="M39.287 18.0413C38.3407 18.3944 36.1221 19.1537 34.9551 18.1401C33.9651 17.2803 34.9931 21.2119 34.2185 21.8638C33.3351 22.6072 37.3836 20.7525 37.9458 22.1635C37.4939 21.4356 37.714 20.6925 38.2197 19.7164C38.7296 18.732 39.2099 18.2541 39.287 18.0413Z"
            stroke="black"
            stroke-width="0.8"
          />
        </svg>
        Contact
      </a>
      <a
        href="#help"
        onClick={() => changeDeg(39)}
        className="item item4"
        style={{ transform: `rotate(${deg}deg)` }}
      >
        <svg
          width="34"
          height="41"
          viewBox="0 0 34 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.14369"
            y="0.26003"
            width="32.5"
            height="39.5"
            rx="6.75"
            transform="rotate(1.07787 1.14369 0.26003)"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M12.2132 15.9075C13.0949 13.22 11.7524 9.90205 10.971 8.57901C10.952 7.72938 11.0649 5.75214 11.6678 4.64018C12.4215 3.25022 16.6783 5.01887 16.7351 7.56775C16.792 10.1166 28.0593 9.57121 24.3212 13.4798C20.5831 17.3883 18.7879 16.0552 18.4963 20.5735C18.2047 25.0917 24.753 19.6493 26.7792 22.5466C28.8054 25.4439 25.9952 26.9778 23.185 28.5117C20.3748 30.0456 22.5753 31.9582 19.5909 34.4768C16.6065 36.9953 12.2056 33.1701 13.2206 30.3031C14.2356 27.4361 8.64561 27.4627 7.60408 24.7396C6.56256 22.0165 11.1111 19.2669 12.2132 15.9075Z"
            stroke="black"
            stroke-width="0.5"
          />
          <path
            d="M16.62 15.8797C17.5017 13.1922 16.1592 9.87422 15.3777 8.55118C15.3588 7.70155 15.4716 5.72431 16.0746 4.61235C16.8282 3.22239 21.0851 4.99104 21.1419 7.53991C21.1987 10.0888 32.466 9.54338 28.7279 13.4519C24.9898 17.3605 23.1946 16.0273 22.903 20.5456C22.6114 25.0639 29.1597 19.6215 31.1859 22.5188C33.2122 25.4161 30.402 26.95 27.5918 28.4839C24.7816 30.0177 26.982 31.9303 23.9976 34.4489C21.0132 36.9675 16.6123 33.1423 17.6273 30.2753C18.6423 27.4083 13.0523 27.4348 12.0108 24.7117C10.9693 21.9887 15.5179 19.239 16.62 15.8797Z"
            stroke="black"
            stroke-width="0.5"
          />
        </svg>
        Help
      </a> */}
    </div>
  );
};

export default Circle;
