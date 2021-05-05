import React from 'react';
import Tag, { Space } from 'antd';
import CheckableTag from 'antd/lib/tag/CheckableTag';

const tagsData = ['标签1','标签2','标签3'];

class ProductSelect extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectTag: '标签1',
        }
    }

    handleTagChange(tag){
        this.setState({
            selectTag: tag,
        })
    }

    render(){
        return(
            <div>
                <div>
                    <span>
                        类别选择
                    </span>
                        <Space>
                            {tagsData.map(tag => (
                                <CheckableTag
                                    key={tag}
                                    onChange={checked => this.handleTagChange(tag)}
                                    >
                                    {tag}
                                </CheckableTag>
                            ))}
                        </Space>
                </div>
            </div>
        );
    }
}

export default ProductSelect;