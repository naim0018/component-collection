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
    <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 shadow-xl">
      <div className="p-4 border-b border-white/20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-400 to-purple-400 flex items-center justify-center">
            <span className="text-white font-bold text-sm">UI</span>
          </div>
        
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-white/5 p-1 rounded-lg backdrop-blur-sm">
            <button
              onClick={() => setToggle(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-500 ${
                toggle
                  ? "bg-gradient-to-r from-blue-400 to-purple-400 text-white shadow-lg"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => setToggle(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-500 ${
                !toggle
                  ? "bg-gradient-to-r from-blue-400 to-purple-400 text-white shadow-lg"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Code
            </button>
          </div>

          <button
            onClick={() => {
              navigator.clipboard.writeText(code);
              setCopy(true);
              setTimeout(() => setCopy(false), 900);
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 hover:text-white transition-all duration-300 text-sm backdrop-blur-sm"
          >
            {copy ? (
              <>
                <IoMdCheckmarkCircleOutline className="text-lg text-green-400" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <FaRegCopy className="text-lg" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Container for preview and code views with sliding animation */}
      <div className="relative">
        {/* Preview panel that slides in from the left */}
        <div 
          className={`w-full transition-all duration-500 ease-in-out transform ${
            toggle ? 'block' : 'hidden'
          }`}
        >
          <div className="p-8">
            <div className="bg-white/5 rounded-xl backdrop-blur-sm">
              {children}
            </div>
          </div>
        </div>

        {/* Code panel that slides in from the right */}
        <div 
          className={`w-full transition-all duration-500 ease-in-out transform ${
            !toggle ? 'block' : 'hidden'
          }`}
        >
          <div className="rounded-xl overflow-hidden p-8">
            <SyntaxHighlighter
              language="jsx"
              style={nightOwl}
              customStyle={{
                background: "rgba(0,0,0,0.3)",
                padding: "2rem",
                fontSize: "14px",
                margin: 0,
                maxHeight: "600px",
                overflow: "auto",
              }}
              showLineNumbers={true}
              wrapLines={true}
              wrapLongLines={true}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
