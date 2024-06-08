import React, { useRef, useState } from 'react';
import { useLoginMutation, useRegisterMutation } from '../../store/api/authApi';
import { useDispatch } from 'react-redux';
import { login } from '../../store/reducer/authSlice';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);

    // 引入注册api
    const [regFn, { isSuccess: regSuccess, error: regError }] = useRegisterMutation();
    const [loginFn, { isSuccess: loginSuccess, error: loginError }] = useLoginMutation();

    const usernameInp = useRef();
    const pwdInp = useRef();
    const emailInp = useRef();

    // 获取dispatch
    const dispatch = useDispatch();
    // 获取navigate
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault()

        // 获取用户输入的内容
        const username = usernameInp.current.value
        const password = pwdInp.current.value
        console.log(username, password);

        // 处理登录功能
        if (isLoginForm) {
            loginFn({
                identifier: username,
                password
            }).then(res => {
                if (!res.error) {
                    // 登录成功，向系统中添加标识，标记用户的登录状态
                    // 登录状态（布尔值，token(jwt)，用户信息）
                    dispatch(login({
                        token: res.data.jwt,
                        user: res.data.user
                    }))
                    // 跳转到根目录 navigate
                    navigate("/", { replace: true })
                }

            })
        } else {
            const email = emailInp.current.value;
            regFn({
                username,
                password,
                email
            }).then(res => {
                console.log(res);
                if (!res.error) {
                    // 注册成功,转到登录表单
                    setIsLoginForm(true)
                }
            })
        }

    }

    return (
        <div>
            <p style={{ color: "red" }}>
                {regError && "用户名或email重复"}
                {loginError && "用户名或密码错误"}
            </p>
            <h2>{isLoginForm ? "登录" : "注册"}</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <input ref={usernameInp} type='text' placeholder={'用户名'} />
                </div>
                {isLoginForm ? null :
                    <div>
                        <input ref={emailInp} type='email' placeholder={'邮箱'} />
                    </div>
                }
                <div>
                    <input ref={pwdInp} type='password' placeholder={'密码'} />
                </div>
                <div>
                    {isLoginForm ?
                        <button>登录</button> :
                        <button>注册</button>
                    }
                    <a href='#' onClick={
                        event => {
                            console.log(event);
                            console.log(isLoginForm);
                            event.preventDefault();
                            setIsLoginForm(prevState => !prevState);
                            console.log(isLoginForm);

                        }
                    } style={{ color: "white" }}>
                        {
                            isLoginForm ?
                                "没有账号？点击注册" :
                                "已有账号？点击登录"
                        }
                    </a>
                </div>
            </form >
        </div >
    )
}

export default AuthForm;