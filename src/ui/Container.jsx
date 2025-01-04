/* eslint-disable react/prop-types */
/**
 * Container component that displays content in two modes: Preview and Code
 * 
 * Features:
 * - Toggle between Preview and Code views
 * - Copy code functionality with visual feedback
 * - Syntax highlighting for code display
 * - Smooth transitions between views
 * 
 * @param {ReactNode} children - Content to display in Preview mode
 * @param {string} code - Source code to display in Code mode
 */
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaRegCopy } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Container = ({ children, code }) => {
  // State for tracking active view (Preview/Code) and copy button status
  const [toggle, setToggle] = useState(true);
  const [copy, setCopy] = useState(false);

  return (
    <div className="backdrop-blur-xl bg-black/90 rounded-2xl  shadow-xl">
      {/* Header section with UI logo and controls */}
      <div className="p-4 border-b border-white/20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-400 to-purple-400 flex items-center justify-center">
            <span className="text-white font-bold text-sm">UI</span>
          </div>
        
        </div>

        {/* View toggle and copy buttons */}
        <div className="flex items-center gap-3">
          {/* Preview/Code toggle buttons */}
          <div className="bg-black/30 p-1 rounded-lg backdrop-blur-sm">
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

          {/* Copy code button with feedback */}
          <button
            onClick={() => {
              navigator.clipboard.writeText(code);
              setCopy(true);
              setTimeout(() => setCopy(false), 900);
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 hover:bg-black/50 text-white/90 hover:text-white transition-all duration-300 text-sm backdrop-blur-sm"
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
          <div className="p-8 bg-gray-50 rounded-b-xl">
            <div className="">
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
                background: "rgba(0,0,0,0.5)",
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
