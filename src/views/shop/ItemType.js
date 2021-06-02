import React from 'react';
import { TreeSelect } from 'antd';
const { TreeNode } = TreeSelect;
class ItemType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: undefined,
        };
    }

    render() {
        return (
            <div>
                 <TreeSelect
                    showSearch
                    style={{ width: '100%' }}
                    value={this.state.value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    allowClear
                    multiple
                    onChange={this.props.onChangeType}
                >
                    <TreeNode value="food" title="食品酒饮">
                        <TreeNode value="snacks" title="休闲食品" />
                        <TreeNode value="spices" title="粮油调味" />
                        <TreeNode value="wine" title="酒类" />
                        <TreeNode value="drink" title="饮品" />
                        <TreeNode value="water" title="水" />
                    </TreeNode>
                    <TreeNode value="electronic" title="电脑办公">
                        <TreeNode value="computer" title="整机" />
                        <TreeNode value="laptop" title="笔记本" />
                        <TreeNode value="peripheral" title="外设" />
                        <TreeNode value="e-parts" title="配件" />
                    </TreeNode>
                    <TreeNode value="phone" title="手机">
                        <TreeNode value="mobile" title="手机" />
                        <TreeNode value="gamephone" title="游戏手机" />
                        <TreeNode value="power" title="充电宝" />
                        <TreeNode value="usb" title="数据线" />
                        <TreeNode value="charger" title="充电器" />
                        <TreeNode value="film" title="膜壳" />
                        <TreeNode value="p-parts" title="配件" />
                    </TreeNode>
                    <TreeNode value="fresh" title="生鲜">
                        <TreeNode value="fruit" title="水果" />
                        <TreeNode value="meat" title="肉类" />
                        <TreeNode value="fish" title="水产" />
                        <TreeNode value="vegetables" title="蔬菜" />
                        <TreeNode value="protein" title="蛋奶" />
                    </TreeNode>
                    <TreeNode value="clean" title="个护清洁" />
                    <TreeNode value="baby" title="母婴护理" />
                    <TreeNode value="digital" title="数码" />
                    <TreeNode value="outdoor" title="运动户外" />
                    <TreeNode value="cook" title="家居厨具" />
                    <TreeNode value="girlcloth" title="女装" />
                    <TreeNode value="shoe" title="鞋靴" />
                    <TreeNode value="furniture" title="家具家电" />
                </TreeSelect>
            </div>
        );
    }
}

export default ItemType;