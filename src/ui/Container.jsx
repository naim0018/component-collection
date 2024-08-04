/* eslint-disable react/prop-types */
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaRegCopy } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Container = ({ children, code }) => {
  const [toggle, setToggle] = useState(true);
  const [copy, setCopy] = useState(false);

  return (
    <div className=" border-2 border-black">
      <div className=" p-3 bg-black  flex items-center justify-between px-10">
        <div
          className="bg-white px-5 py-2 font-semibold"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? "Code" : "Preview"}
        </div>
        <div className="text-white flex items-center justify-center gap-2 ">
          {copy ? (
            <div className="flex items-center">
              <IoMdCheckmarkCircleOutline className="text-lg mr-2" />
              Copied
            </div>
          ) : (
            <div className="flex items-center"    onClick={() => {
                navigator.clipboard.writeText(code)
                setCopy(!copy)
                setTimeout(()=>{
                    setCopy(false)
                },900)
            }}>
              <FaRegCopy className="text-lg mr-2" />
              Copy
            </div>
          )}
        </div>
      </div>
      <div className={toggle ? "p-10" : ""}>
        {toggle ? (
          children
        ) : (
          <SyntaxHighlighter
            language="jsx"
            style={nightOwl}
            customStyle={{ padding: "20px",maxHeight:'600px', whiteSpace: 'normal'}}
            showLineNumbers={true}
            // wrapLines={true}
            // wrapLongLines={true}
          >
            {code}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  );
};
export default Container;
