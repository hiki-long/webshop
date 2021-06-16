import React, { Component } from 'react';
import ImgCrop from 'antd-img-crop'; //引入图片裁剪组件
import { Upload, Button, Modal, message } from 'antd'; //引入上传、按钮、弹窗等antd组件
import { stringify } from 'qs';


//base64图片文件
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

class AvatarUpload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [],
            img: ""
        };

    }

   //图片预览取消函数
    handleCancel = () => this.setState({ previewVisible: false });

　　//图片预览弹窗函数
    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

　　//上传文件改变时的状态，详情可以参考antd的Upload组件API参数
    onChange = ({file, fileList}) => {
        const { status, response } = file
        console.log("status = " + status)
        console.log("response = " + JSON.stringify(response))
        this.setState({fileList});
        if (status === "done") {
            const res = JSON.stringify(response);
            console.log(res.data);
            if(res.code === 200) {
                message.info("上传图片成功");
                this.setState({ img: res.data});
                this.props.onChange(res.data);
            }
        }
        
    };

    render() {
        const { previewVisible, previewImage, fileList } = this.state;
　　　　　//根据官方属性定制化裁剪框大小固定的裁剪组件属性
        const props = {
            width: 800,  //裁剪宽度
            height: 800, //裁剪高度
            resize: true, //裁剪是否可以调整大小
            resizeAndDrag: true, //裁剪是否可以调整大小、可拖动
            modalTitle: "上传图片", //弹窗标题
            modalWidth: 800, //弹窗宽度
        };
        return (
            <div>
                <ImgCrop {...props}>
                    <Upload
                        name="file"
                        accept="image/*"
                        listType="picture"
                        fileList={fileList}
                        onPreview={this.handlePreview}
                        onChange={this.onChange}
                        //这里action对应的是后端api的接口
                        // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        action="http://localhost:8089/item/storePicture"
                    >
                        {fileList.length >= 1 ? null : (<Button>添加图片</Button>)}　
{/* {通过三木运算符判断文件列表fileList的长度来决定上传图片的数量，达到控制图片数量的功能} */}
                    </Upload>
                </ImgCrop>
{/* {图片预览弹出框：可以实时查看上传的图片} */}
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel} title='Image-Show' width={800}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
    }
}

export default AvatarUpload;