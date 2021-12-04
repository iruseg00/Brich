import FileSaver from "file-saver";
import { Button, Form, Input, Spin, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { LoadingOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileInfo,
  sendPost as sendPostAction,
  getAllPosts,
  downloadJSON,
  uploadJSON,
} from "../../redux/actions/brich";
import style from "./style.module.scss";
import FormItem from "antd/lib/form/FormItem";

const BrichProfile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileInfo());
  }, [dispatch]);
  const state = useSelector((store) => store.brich.about);
  const posts = useSelector((store) => store.brich.posts);
  const loading = useSelector((store) => store.brich.loading);
  const file = useSelector((store) => store.brich.file);
  const antIcon = <LoadingOutlined style={{ fontSize: 64 }} spin />;

  const sendPost = (sendData) => {
    const objectToSend = {
      title: sendData.titleInput,
      text: sendData.descriptionInput,
    };
    dispatch(sendPostAction(objectToSend));
  };

  const renderPosts = (arr) => {
    return arr.map((el) => {
      return (
        <div key={el.postId}>
          <div>Заголовок: {el.title}</div>
          <div>Текст: {el.text}</div>
        </div>
      );
    });
  };

  async function getData() {
    const input = document.createElement("input");
    input.type = "file";
    input.addEventListener("change", function (event) {
      const File = event.target.files[0];
      console.log(File);
      File && dispatch(uploadJSON(File));
    });
    input.click();
  }

  // if (file.data) {
  //   console.log(file);
  //   const blob = new Blob([JSON.stringify(file.data)], {
  //     type: "application/json",
  //   });
  //   FileSaver.saveAs(blob, "posts.json");
  // }

  return loading ? (
    <div className={style.spinContainer}>
      <Spin indicator={antIcon} size="large" />
    </div>
  ) : (
    <div>
      <div>Surname: {state?.data?.surname}</div>
      <div>Middlename: {state?.data?.middleName}</div>
      <div>Email: {state?.data?.email}</div>
      <div>USERID: {state?.data?.userID}</div>
      <Form onFinish={sendPost} name="postForm">
        <FormItem name="titleInput">
          <Input placeholder="Введите заголовок поста" />
        </FormItem>
        <FormItem name="descriptionInput">
          <Input placeholder="Введите текст поста" />
        </FormItem>
        <Button htmlType="submit" type="primary">
          Отправить
        </Button>
        <Button onClick={() => dispatch(getAllPosts())} type="default">
          Получить посты
        </Button>
        <Button onClick={() => dispatch(downloadJSON())} type="default">
          Скачать посты (JSON)
        </Button>
      </Form>
      <Upload showUploadList={false}>
        <Button onClick={getData} icon={<UploadOutlined />}>
          Click to Upload
        </Button>
      </Upload>
      {console.log(posts)}
      {posts.data ? renderPosts(posts.data) : null}
    </div>
  );
};

export default BrichProfile;
