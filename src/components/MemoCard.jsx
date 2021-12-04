import React from 'react'
import { Card } from 'antd'

function MemoCard({title, memo}) {
    return (
        <Card title={title}>
            {memo}
        </Card>
    )
}

export default MemoCard