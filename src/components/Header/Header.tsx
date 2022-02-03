import React from 'react';
import {NavLink} from 'react-router-dom';
import {Avatar, Button, Col, Layout, Menu, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {StateReduxType} from "../../redux/redux-store";
import {loginOut} from "../../redux/auth-reduсer";


export const Header = () => {

    const isAuth = useSelector<StateReduxType, boolean>(state => state.auth.isAuth)
    const login = useSelector<StateReduxType, null | string>(state => state.auth.login)
    const dispatch = useDispatch()

    const loginOutCallback = () => {
        dispatch(loginOut())
    }

    const {Header} = Layout;


    return (
        <Header className="header">
            <div className="logo"/>
            <Row>
                <Col span={18}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1"><NavLink to="/users">Users</NavLink></Menu.Item>
                    </Menu>
                </Col>
                {isAuth
                    ? <> <Col span={1}>
                        <Avatar alt={login || ""} style={{backgroundColor: '#87d068'}}
                                icon={<UserOutlined/>}/>
                    </Col>
                        <Col span={5}>
                            <Button onClick={loginOutCallback}>Log out</Button>
                        </Col>
                    </>
                    : <Col span={6}>
                        <Button>
                            <NavLink to="/login">Login</NavLink>
                        </Button>
                    </Col>
                }
            </Row>


        </Header>


        // <header className={styles.header}>
        //     <img className={styles.img} src={dragon} alt=""/>
        //     <div className={styles.auth}>
        //         {props.isAuth ? <div>{props.login} <button onClick={props.loginOut}>Log out</button></div> :
        //             <NavLink to="/login">Login</NavLink>}
        //     </div>
        // </header>
    );
}

