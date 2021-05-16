import {Divider, Comment, Tooltip, List } from 'antd';
import moment from 'moment';
import React from 'react';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
//商品评论区
const data = [
    {
        actions: [<Tooltip key="comment-basic-like" title="Like">
        <span>
            <LikeOutlined />
            {/* <span className="comment-action">{likes}</span> */}
        </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
        <span>
            <DislikeOutlined />
            {/* <span className="comment-action">{dislikes}</span> */}
        </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>],
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully and
          efficiently.
        </p>
      ),
      datetime: (
        <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().subtract(1, 'days').fromNow()}</span>
        </Tooltip>
      ),
    },
    {
      actions: [<Tooltip key="comment-basic-like" title="Like">
                <span>
                    <LikeOutlined />
                    {/* <span className="comment-action">{likes}</span> */}
                </span>
                </Tooltip>,
                <Tooltip key="comment-basic-dislike" title="Dislike">
                <span>
                    <DislikeOutlined />
                    {/* <span className="comment-action">{dislikes}</span> */}
                </span>
                </Tooltip>,
                <span key="comment-basic-reply-to">Reply to</span>],
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully and
          efficiently.
        </p>
      ),
      datetime: (
        <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().subtract(2, 'days').fromNow()}</span>
        </Tooltip>
      ),
    },
];
class ProductComment extends React.Component {

    render() {
        return(
            <div>
                <Divider horizontal><span>评论区</span></Divider>
                <List
                    className="comment-list"
                    header={`${data.length} replies`}
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                    <li>
                        <Comment
                        actions={item.actions}
                        author={item.author}
                        avatar={item.avatar}
                        content={item.content}
                        datetime={item.datetime}
                        style={{textAlign: "left"}}
                        />
                    </li>
                    )}
                />
            </div>            
        );
    }
}

export default ProductComment;