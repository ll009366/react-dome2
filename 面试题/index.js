
import React, { useState, useEffect  } from 'react';
import { Button, Tooltip, Table, Tag, Modal , Input} from 'antd';
const { Column, ColumnGroup } = Table;

const Home = () => {
    const [listData, setListData] = useState([]);
    const [hasLoading, setHasLoading] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [dataSource, setDataSource]=useState([])

    useEffect(() => {
    let url = "http://www.mocky.io/v2/5ea28891310000358f1ef182"
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    let fetchOptions = {
        method: "GET",
        headers: headers,
    };
    fetch(url, fetchOptions).then((response) => response.json())
        .then((data) => {
            setListData(data.apis)
            setHasLoading(false)
            setDataSource(data.apis)
        })
    }, []);

    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            key: '1',
            render: (item, record) => {
                return (
                    <div>{item}</div>
                )
            }
        },
        {
            title: '描述',
            dataIndex: 'description',
            key: '2',
            onCell: () => {
                return {
                    style: {
                        maxWidth: 300,
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                    }
                }
            },
            render: (item, record) => {
                return (
                    <Tooltip placement="topLeft" title={item}>{item}</Tooltip>
                )
            }
        },
        {
            title: '图片',
            dataIndex: 'image',
            key: '3',
            render: (item, record) => {
                return (
                    //<Tooltip placement="topLeft" title={text}>{text}</Tooltip>
                    <span>
                        <img src={item}></img>
                    </span>

                )
            }
        },
        {
            title: '图片链接',
            dataIndex: 'baseURL',
            key: '4',
            render: (item, record) => {
                return (
                    <a href={item} target="_blank">链接</a>
                )
            }
        },
        {
            title: '标签',
            dataIndex: 'tags',
            key: '5',
            onCell: () => {
                return {
                    style: {
                        maxWidth: 300,
                    }
                }
            },
            render: (item, record) => {
                return (
                    <span>
                        {
                            item.map((tag, index) => {
                                return (
                                    <Tag color="blue" key={tag} style={{ margin: '10px 5px' }}>
                                        {tag}
                                    </Tag>
                                )
                            })
                        }
                    </span>
                )
            }
        },
        {
            title: '属性',
            dataIndex: 'properties',
            key: '6',
            render: (item, record) => {
                return (
                    <Button type="primary" onClick={() => { handleClickCheck(item)}}>查看</Button>
                )
            }
        },
    ];

    const handleClickCheck = (data) => {
        Modal.info({
            title: '详情',
            content: (
                <div>
                    <Table dataSource={data}>
                        <ColumnGroup title="属性">
                            <Column title="First Name" dataIndex="type" key="type" />
                            <Column title="Last Name" dataIndex="url" key="url" />
                        </ColumnGroup>
                    </Table>
                </div>
            ),
            onOk() { },
            width:1200
        });
    }

    const handleChangeInput = (e) => {
        setInputValue(e.target.value);
        console.log(e.target.value)
        loadListData(e.target.value)
    }



    const loadListData = (data) => {
        let newArr = [];
        if (data) {
            for (var i = 0; listData.length > i; i++) {
                listData[i].tags.map((item) => {
                    if (item.indexOf(data) !== -1) {
                        newArr.push(listData[i])
                    }
                })
            }
            console.log(newArr)
            setDataSource(newArr)
            return newArr
        } else {
            console.log(listData)
            setDataSource(listData)
            return listData
        }
    }

return (
    <div style={{ width: '1200px', margin: '0 auto' }}>
        <div style={{margin:"40px 0px",width: "40%"}}>
            <Input placeholder="请输入搜索内容" onChange={handleChangeInput} value={inputValue} />
        </div>

        <Table
            columns={columns}
            dataSource={dataSource}
            loading={hasLoading}
        />

    </div>
)
}

export default Home


