import 'antd/dist/antd.css'; 
import {Card, Space} from 'antd'
import React, {useState} from 'react'
import WriteForm from "./components/WriteForm"
import MemoCard from './components/MemoCard';

function App() {
  const [list, setList] = useState([])

  const handleMemoSubmit = memoData => {
    setList([...list, memoData])
  }

  return (
    <Space>
      <Card title="나의 메모장">
        <WriteForm onSubmit={handleMemoSubmit} />
        {
          list.map((item, idx) => (
            <MemoCard
              title={item.title}
              memo={item.memo}
              id={idx}
              key={idx}
            />
          ))
        }
      </Card>
    </Space>
  );
}

export default App;