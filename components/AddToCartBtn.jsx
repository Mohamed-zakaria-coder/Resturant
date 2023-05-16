const AddToCartBtn = ({ handleClick }) => {
  return (
    <button
      className="text-white rounded p-2 mt-8 relative w-fit font-bold ml-4"
      onClick={handleClick}
    >
      ADD TO <br /> CART
      <svg
        style={{
          transform: "rotate(130deg) scaleX(-1)",
          position: "absolute",
          top: -23,
          left: -25,
          zIndex: -1,
        }}
        fill="#4ade80"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="120px"
        height="110px"
        viewBox="0 0 551.391 551.391"
        xmlSpace="preserve"
      >
        <g>
          <path
            d="M413.695,0c0,0-45.366,44.014-94.43,61.759C-44.068,193.178,109.165,449.277,114.164,450.121
c0,0,20.374-35.48,47.896-55.717c174.644-128.389,210.14-276.171,210.14-276.171s-39.19,177.829-194.562,288.479
c-34.316,24.426-57.552,84.568-67.388,144.679c0,0,24.325-9.828,34.785-12.49c4.079-26.618,12.607-52.106,27.025-74.875
c217.151,25.854,288.272-149.123,297.563-210.136C491.552,109.79,413.695,0,413.695,0z"
          />
        </g>
      </svg>
    </button>
  );
};

export default AddToCartBtn;
