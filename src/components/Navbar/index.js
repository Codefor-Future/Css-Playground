import { useState } from 'react';
import { Link } from "react-router-dom";
import './style.css';
import RightArrow from '../../assets/right.png'

import { CirclePicker } from 'react-color';

export default function FlexWrap() {
    const [classValue, setclassValue] = useState("flex-wrap")
    const [showCode, setshowCode] = useState(true)
    const [inset, setinset] = useState(false)
    const [offsetX, setoffsetX] = useState(0)
    const [offsetY, setoffsetY] = useState(0)

    return (
        <div>
            <nav>
                <ul className='flex justify-end gap-3 text-gray-100 font-semibold text-xs'>
                    <li>
                        <Link to="/flex/wrap">Flex wrap</Link>
                    </li>
                    <li>
                        <Link to="/box-shadow">Box shadow</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}