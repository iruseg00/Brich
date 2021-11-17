import React from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import style from "./style.module.scss";
const { Dragger } = Upload;

const DragnDropImage = (props) => {
  const [image, setImage] = React.useState();
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImage(reader.result);
      callback(reader.result);
    });
    reader.readAsDataURL(img);
  };
  const beforeUpload = (file) => {
    const isJpgOrPng =
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/jpg";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
      return;
    }
    const isLt2M = file.size / 1024 / 1024 < 4;
    if (!isLt2M) {
      message.error("Image must smaller than 4MB!");
      return;
    }
    file.status = "done";
    getBase64(file, (imageUrl) => props.onChange(imageUrl));
    return false;
  };
  return (
    <Dragger
      className={style.download_image}
      name="file"
      maxCount={1}
      beforeUpload={beforeUpload}
      onRemove={ ()=> setImage('') }
      {...props}
    >
      {image ? (
        <img src={image} className={style.preview} />
      ) : (
        <span>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className={style.upload_text}>Загрузить фото</p>
        </span>
      )}
    </Dragger>
  );
};

export default DragnDropImage;
