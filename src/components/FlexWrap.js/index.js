import { useState } from 'react';
import './style.css';
import RightArrow from '../../assets/right.png'

function FlexWrap() {
    const [classValue, setclassValue] = useState("flex-wrap")
    const [showCode, setshowCode] = useState(true)
    const classNames = {
        "flex-nowrap": "nowrap",
        "flex-wrap-reverse": "wrap-reverse",
        "flex-wrap": "wrap"
    }
    return (
        <div className="container">
            <h3 className='text-xs font-semibold text-white'>
                FLEX BOX
            </h3>
            <h1 className='text-4xl font-black text-white'>
                Flex Wrap
            </h1>
            <div className='pt-8'>
                <h6 className='text-xs text-white font-semibold'>Parent</h6>
                <div className={`parent rounded-md p-6 flex gap-4 mt-1 ${classValue}`}>
                    {/* Child */}
                    <div className='child w-28 h-28 rounded-xl flex flex-col justify-center items-center'>
                        <div className='text-xs text-gray-100'>
                            Child
                        </div>
                        <div className='text-5xl font-bold text-gray-100'>
                            1
                        </div>
                    </div>
                    {/* /Child  */}
                    <div className='child w-28 h-28 rounded-xl flex flex-col justify-center items-center'>
                        <div className='text-xs text-gray-100'>
                            Child
                        </div>
                        <div className='text-5xl font-bold text-gray-100'>
                            2
                        </div>
                    </div>
                    <div className='child w-28 h-28 rounded-xl flex flex-col justify-center items-center'>
                        <div className='text-xs text-gray-100'>
                            Child
                        </div>
                        <div className='text-5xl font-bold text-gray-100'>
                            3
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-3'>
                <div className='link text-sm underline text-white my-1 flex items-center' onClick={() => setshowCode(!showCode)}>
                    <div className='font-semibold pl-1'>
                        {
                            showCode ? "Hide code" : "Show code"
                        }
                    </div>
                    <img src={RightArrow} className='h-3' />
                </div>
                {showCode &&
                    <code className='rounded-md p-6 mt-5 text-gray-50 font-semibold block'>
                        <p>{`.parent{`}</p>
                        <p className='pl-5'>{`display:flex;`}</p>
                        <p className='pl-5 enhance-green'>{`flex-wrap: ${classNames[classValue]};`}</p>
                        <p className='pl-5'>{`gap:10px;`}</p>
                        <p>{`}`}</p>
                    </code>
                }
            </div>
            <div className='py-5 px-4 flex flex-col gap-4'>
                <div className='flex justify-items-stretch gap-3 w-full'>
                    <button className={`flex-1 p-3 border ${classValue === "flex-nowrap" ? "bg-white text-gray-800" : ""}`}
                        onClick={() => setclassValue("flex-nowrap")}>
                        nowrap
                    </button>
                    <button className={`flex-1 p-3 border ${classValue === "flex-wrap-reverse" ? "bg-white text-gray-800" : ""}`}
                        onClick={() => setclassValue("flex-wrap-reverse")}>
                        wrap-reverse
                    </button>
                </div>
                <div className='flex justify-items-stretch gap-3 w-full'>
                    <button className={`flex-1 p-3 border ${classValue === "flex-wrap" ? "bg-white text-gray-800" : ""}`}
                        onClick={() => setclassValue("flex-wrap")}>
                        wrap
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FlexWrap;
