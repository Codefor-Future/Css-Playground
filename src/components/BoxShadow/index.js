import { useState } from 'react';
import './style.css';
import RightArrow from '../../assets/right.png'

import { CirclePicker } from 'react-color';

function FlexWrap() {
    const [classValue, setclassValue] = useState("flex-wrap")
    const [showCode, setshowCode] = useState(true)
    const [inset, setinset] = useState(false)
    const [offsetX, setoffsetX] = useState(0)
    const [offsetY, setoffsetY] = useState(0)
    const [blur, setblur] = useState(20)
    const [radius, setradius] = useState(0)
    const [color, setcolor] = useState("#112233")
    const classNames = {
        "flex-nowrap": "nowrap",
        "flex-wrap-reverse": "wrap-reverse",
        "flex-wrap": "wrap"
    }
    const changeValues = (e, id) => {
        let el = document.querySelector(id)
        var value = (e.target.value - (-100)) / (100 - (-100)) * 100
        if (id === "#blur") {
            var value = (e.target.value - (0)) / (100 - (0)) * 100
        }
        el.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
    }
    return (
        <div className="container">
            <h3 className='text-xs font-semibold text-white'>
                SHADOW
            </h3>
            <h1 className='text-4xl font-black text-white'>
                Box Shadow
            </h1>
            <div className='pt-8'>
                <div className={`parent overflow-hidden relative rounded-md p-6 flex justify-around items-center gap-4 mt-1 ${classValue}`}>
                    <div className='absolute top-0 left-0 p-4'>
                        <h6 className='text-xs text-white font-bold'>Parent</h6>
                    </div>
                    {/* Child */}
                    {/* <div
                        style={{ boxShadow: `${inset ? "inset" : ""} ${offsetX}px ${offsetY}px  ${blur}px ${radius}px ${color}` }}
                        className={`child z-auto w-28 h-28 rounded-xl flex flex-col justify-center items-center`}>
                        <div className='text-xs text-gray-100'>
                            Child
                        </div>
                        <div className='text-5xl font-bold text-gray-100'>
                            1
                        </div>
                    </div> */}
                    {/* /Child  */}
                    <div
                        style={{ boxShadow: `${inset ? "inset" : ""} ${offsetX}px ${offsetY}px  ${blur}px ${radius}px ${color}` }}
                        className='child z-auto w-28 h-28 rounded-xl flex flex-col justify-center items-center'>
                        <div className='text-xs text-gray-100'>
                            Child
                        </div>
                        <div className='text-5xl font-bold text-gray-100'>
                            2
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
                    <img src={RightArrow} className='h-3' alt='' />
                </div>
                {showCode &&
                    <code className='rounded-md p-6 mt-5 text-gray-50 font-semibold block'>
                        <p>{`.child{`}</p>
                        <p className='pl-5'>{`box-shadow: `}</p>
                        <p className='pl-10 enhance-green'>{`${inset?"inset":""}`}</p>
                        <p className='pl-10 enhance-green'>{`${offsetX}px ${offsetY}px`}</p>
                        <p className='pl-10 enhance-green'>{`${blur}px ${radius}px`}</p>
                        <p className='pl-10 enhance-green'>{`${color} ;`}</p>
                        <p>{`}`}</p>
                    </code>
                }
            </div>
            <div className='py-5 flex flex-col gap-4'>
                <div>
                    <table className='w-full text-white font-semibold'>
                        <tbody>
                            <tr>
                                <td>
                                    Inset
                                </td>
                                <td>
                                    <input
                                        id=''
                                        value={inset}
                                        onChange={(e) => {
                                            setinset(!inset)
                                        }}
                                        type="checkbox"
                                        className='slider'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Offset X
                                </td>
                                <td>
                                    <input
                                        id='offsetX'
                                        value={offsetX}
                                        onChange={(e) => {
                                            setoffsetX(e.target.value)
                                            changeValues(e, "#offsetX")
                                        }}
                                        type="range" min="-100" max="100"
                                        className='slider'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Offset Y
                                </td>
                                <td>
                                    <input
                                        id='offsetY'
                                        value={offsetY}
                                        onChange={(e) => {
                                            setoffsetY(e.target.value)
                                            changeValues(e, "#offsetY")
                                        }}
                                        type="range" min="-100" max="100"
                                        className='slider'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Blur Radius
                                </td>
                                <td>
                                    <input
                                        id='blur'
                                        value={blur}
                                        onChange={(e) => {
                                            setblur(e.target.value)
                                            changeValues(e, "#blur")
                                        }}
                                        type="range" min="0" max="100"
                                        className='slider'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Spread Radius
                                </td>
                                <td>
                                    <input
                                        id='radius'
                                        value={radius}
                                        onChange={(e) => {
                                            setradius(e.target.value)
                                            changeValues(e, "#radius")
                                        }}
                                        type="range" min="-100" max="100"
                                        className='slider'
                                    />
                                </td>
                            </tr>
                            <tr className='pt-5' VALIGN="top">
                                <td className='pt-0'>
                                    Color
                                </td>
                                <td className='pt-2'>
                                    {/* <input
                                    id=''
                                    value={radius}
                                    onChange={(e) => {
                                        setradius(e.target.value)
                                        changeValues(e, "#radius")
                                    }}
                                    type="color"
                                    className='slider'
                                /> */}
                                    <div>
                                        <CirclePicker
                                            width={"45vw"}
                                            colors={["#f44336", "#673ab7", "#2196f3", "#112233"]}
                                            color={color}
                                            onChangeComplete={(e) => {
                                                setcolor(e.hex)
                                            }}
                                        />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default FlexWrap;
