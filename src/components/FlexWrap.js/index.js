import { useState  } from 'react';
import './style.css';

function FlexWrap() {
    const [classValue, setclassValue] = useState("flex-wrap")
    const [showCode, setshowCode] = useState(true)
    const classNames = {
        "flex-nowrap": "nowrap",
        "flex-wrap-reverse": "wrap-reverse",
        "flex-wrap":  "wrap"
    }
    return (
        <div className="test">
            <h1 className='font-bold text-xl'>
                Flex Wrap
            </h1>
            <div className='pt-5'>
                <h6 className='text-xs'>Parent</h6>
                <div className={`parent rounded p-3 flex gap-4 ${classValue}`}>
                    {/* Child */}
                    <div className='child w-32 h-32 rounded-xl flex flex-col justify-center items-center'>
                        <div className='text-xs text-gray-100'>
                            Child
                        </div>
                        <div className='text-5xl font-bold text-gray-100'>
                            1
                        </div>
                    </div>
                    {/* /Child  */}
                    <div className='child w-32 h-32 rounded-xl flex flex-col justify-center items-center'>
                        <div className='text-xs text-gray-100'>
                            Child
                        </div>
                        <div className='text-5xl font-bold text-gray-100'>
                            2
                        </div>
                    </div>
                    <div className='child w-32 h-32 rounded-xl flex flex-col justify-center items-center'>
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
                <div className='link text-sm underline my-1' onClick={()=>setshowCode(!showCode)}>
                    {
                        showCode? "Hide code": "Show code"
                    }
                </div>
                { showCode &&
                <code className='rounded-sm p-6 text-gray-50 font-semibold block'>
                    <p>{`.parent{`}</p>
                    <p className='pl-5'>{`display:flex;`}</p>
                    <p className='pl-5'>{`flex-wrap: ${classNames[classValue]};`}</p>
                    <p className='pl-5'>{`gap:10px;`}</p>
                    <p>{`}`}</p>
                </code>
                }
            </div>
            <div className='py-5 flex flex-col gap-4'>
                <div className='flex justify-items-stretch gap-3 w-full'>
                    <button className='bg-red-200 flex-1 p-5'
                    onClick={()=>setclassValue("flex-nowrap")}>
                        nowrap
                    </button>
                    <button className='bg-red-200 flex-1 p-5'
                    onClick={()=>setclassValue("flex-wrap-reverse")}>
                        wrap-reverse
                    </button>
                </div>
                <div className='flex justify-items-stretch gap-3 w-full'>
                    <button className='bg-red-200 flex-1 p-5'
                    onClick={()=>setclassValue("flex-wrap")}>
                        wrap
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FlexWrap;
