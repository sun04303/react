import React, { useState } from 'react'
import { Button } from 'antd';


function Hello ({name}) {
    const [num, setNum] = useState(0)

    const handleClickAdd = () => {
        setNum(pre => pre+1) //전에 있는 값을 가져와서 연산 ex num
        // setNum(num + 1) 같은거
    }

    return (
        <>
            <div>{num}</div>
            <Button type="primary" onClick={handleClickAdd}>
                1씩 더히기
            </Button>
        </>
    )
}

export default Hello