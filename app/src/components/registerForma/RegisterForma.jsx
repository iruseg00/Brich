import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Radio } from "antd";
import { register } from "../../redux/actions/registration";

import style from "./style.module.scss";
import DragnDropImage from "../dragnDropImage/DragnDropImage";
import ModalWindow from "../../components/modal/ModalWindow";

function RegisterForma(props) {
  const [ValidateStatusSurname, setValidateStatusSurname] =
    useState("validating");
  const [ValidateStatusName, setValidateStatusName] = useState("validating");
  const [ValidateStatusMiddleName, setValidateStatusMiddleName] =
    useState("validating");
  const [ValidateStatusEmail, setValidateStatusEmail] = useState("validating");
  const [ValidateStatusPass, setValidateStatusPass] = useState("validating");
  const [RadioValue, setRadioValue] = useState("М");

  const [visible, setVisible] = React.useState(false);
  const [action, setAction] = React.useState();

  const [form] = Form.useForm();
  let userPhoto = null;
  const onFinish = (values) => {
    const send = () => () => {
      values.sex = RadioValue;
      values.photo = userPhoto;
      props.register(values);
    };
    setAction(send);
    setVisible(true);
  };
  const onFinishFailed = ({ errorFields }) => {
    const ErrFields = errorFields.map((field) => field.name[0]);
    if (ErrFields.includes("surname")) setValidateStatusSurname("error");
    if (ErrFields.includes("name")) setValidateStatusName("error");
    if (ErrFields.includes("middleName")) setValidateStatusMiddleName("error");
    if (ErrFields.includes("email")) setValidateStatusEmail("error");
    if (ErrFields.includes("password")) setValidateStatusPass("error");
  };
  const radioChange = (e) => setRadioValue(e.target.value === "М" ? "m" : "w");
  const changedField = (e) => {
    switch (e.target.id) {
      case "register_surname":
        setValidateStatusSurname("validating");
        break;
      case "register_name":
        setValidateStatusName("validating");
        break;
      case "register_middleName":
        setValidateStatusMiddleName("validating");
        break;
      case "register_email":
        setValidateStatusEmail("validating");
        break;
      case "register_password":
        setValidateStatusPass("validating");
        break;
      default:
        break;
    }
  };
  const onChangeAvatar = (image) => (userPhoto = image || null);

  return (
    <Form
      form={form}
      className={style.form}
      name="register"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <div className={style.form_info}>
        <Form.Item
          className={style.wrapper_input}
          label="Фамилия"
          name="surname"
          validateStatus={ValidateStatusSurname}
          rules={[
            {
              required: true,
              message: "Please input your surname!",
              pattern: /^[a-zA-Zа-яА-Я]{2,18}/,
            },
          ]}
        >
          <Input size="large" className={style.input} onChange={changedField} />
        </Form.Item>
        <Form.Item
          className={style.wrapper_input}
          label="Имя"
          name="name"
          validateStatus={ValidateStatusName}
          rules={[
            {
              required: true,
              message: "Please input your name!",
              pattern: /^[a-zA-Zа-яА-Я]{2,18}/,
            },
          ]}
        >
          <Input size="large" className={style.input} onChange={changedField} />
        </Form.Item>
        <Form.Item
          className={style.wrapper_input}
          label="Отчество"
          name="middleName"
          validateStatus={ValidateStatusMiddleName}
          rules={[
            {
              required: false,
              message: "Please input your father name!",
              pattern: /^[a-zA-Zа-яА-Я]{2,18}/,
            },
          ]}
        >
          <Input size="large" className={style.input} onChange={changedField} />
        </Form.Item>
        <Radio.Group
          className={style.radio}
          label="Пол"
          options={["М", "Ж"]}
          onChange={radioChange}
          value={RadioValue}
        />
        <Form.Item
          className={style.wrapper_input}
          label="Email"
          name="email"
          validateStatus={ValidateStatusEmail}
          rules={[
            {
              required: true,
              message: "Please input your Email!",
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            },
          ]}
        >
          <Input size="large" className={style.input} onChange={changedField} />
        </Form.Item>
        <Form.Item
          className={style.wrapper_input}
          label="Пароль"
          name="password"
          validateStatus={ValidateStatusPass}
          rules={[
            {
              required: true,
              message: "Please input your password!",
              pattern: /[0-9a-zA-Z.!$_-]{6,24}/,
            },
          ]}
        >
          <Input.Password
            size="large"
            className={style.input}
            onChange={changedField}
          />
        </Form.Item>
        {/* КНОПКА РЕГИСТРАЦИИ */}
        <Form.Item>
          <Button type="primary" htmlType="submit" className={style.submit}>
            Готово
          </Button>
        </Form.Item>
      </div>
      <Form.Item className={style.photo} name="photo">
        <DragnDropImage onChange={onChangeAvatar} />
      </Form.Item>
      <ModalWindow action={action} visible={visible} setVisible={setVisible}>
        Вы уверены, что все данные введены верно?
      </ModalWindow>
    </Form>
  );
}

const mapStateToProps = ({ registration }) => ({ registration });
const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForma);
