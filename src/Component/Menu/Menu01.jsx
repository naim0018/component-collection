import { useState } from "react";
import Container from "../../ui/Container"

const Menu01 = () => {
    const code =`<label className="hamburger cursor-pointer relative block w-12 h-12">
  <input type="checkbox" className="hidden peer" />
  <svg viewBox="0 0 32 32" className="h-12 transition-transform duration-[600ms] ease-in-out peer-checked:-rotate-45">
    <path
      d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
      className="line-top-bottom fill-none stroke-white stroke-[3px] rounded stroke-linejoin-round stroke-linecap-round transition-all duration-[600ms] ease-in-out peer-checked:stroke-[20px] peer-checked:stroke-dasharray-[20,300] peer-checked:stroke-dashoffset-[-32.42]"
    ></path>
    <path
      d="M7 16 27 16"
      className="fill-none stroke-white stroke-[3px] rounded stroke-linejoin-round stroke-linecap-round transition-all duration-[600ms] ease-in-out"
    ></path>
  </svg>
</label>
`
const [isChecked, setIsChecked] = useState(false);

const toggleMenu = () => {
  setIsChecked(!isChecked);
};
  return (
    <Container code={code}>
           <label
      className="cursor-pointer block w-12 h-12 relative"
      onClick={toggleMenu}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={toggleMenu}
        className="hidden"
      />
      <svg
        viewBox="0 0 32 32"
        className={`h-12 w-12 transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isChecked ? "rotate-[-45deg]" : ""
        }`}
      >
        <path
          d="M27 10H13C10.8 10 9 8.2 9 6C9 3.5 10.8 2 13 2C15.2 2 17 3.8 17 6V26C17 28.2 18.8 30 21 30C23.2 30 25 28.2 25 26C25 23.8 23.2 22 21 22H7"
          className={`fill-none stroke-white stroke-[3px] stroke-linecap-round stroke-linejoin-round transition-[stroke-dasharray,stroke-dashoffset] duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isChecked
              ? "stroke-dasharray-[20,300] stroke-dashoffset-[-32.42]"
              : "stroke-dasharray-[12,63]"
          }`}
        />
        <path
          d="M7 16H27"
          className="fill-none stroke-white stroke-[3px] stroke-linecap-round stroke-linejoin-round transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)]"
        />
      </svg>
    </label>


    </Container>
  )
}
export default Menu01