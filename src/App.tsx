import React, {Suspense} from 'react';
import './App.css';
import 'antd/dist/antd.css';

import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reduсer";
import {StateReduxType} from "./redux/redux-store";
import {Preloader} from "./components/preloader/Preloader";
import {NavLink, Redirect, Route, Switch, withRouter} from 'react-router-dom';


import {Layout, Menu} from 'antd';
import {LaptopOutlined, UserOutlined} from '@ant-design/icons';
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Login} from "./components/Login/Login";

import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {UsersContainer} from "./components/Users/UsersContainer";
import {Header} from "./components/Header/Header";
import {ChatPage} from "./pages/Chat/ChatPage";


const {SubMenu} = Menu;
const {Content, Footer, Sider} = Layout;


// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


type AppPropsType = {
    initializeApp: () => void
    initialized: boolean
}

class App extends React.Component<AppPropsType> {


    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <Layout className={"App"}>
                <Header/>
                <Content style={{padding: '0 50px'}}>
                    {/*<Breadcrumb style={{margin: '16px 0'}}>*/}
                    {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
                    {/*</Breadcrumb>*/}
                    <Layout className="site-layout-background"
                            style={{padding: '24px 0'}}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                // defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%'}}
                            >

                                {/*<div><NavLink activeClassName={styles.active} to="/profile">Profile</NavLink></div>*/}
                                {/*<div><NavLink activeClassName={styles.active} to="/dialogs">Dialogs</NavLink></div>*/}
                                {/*<div><NavLink activeClassName={styles.active} to="/news">News</NavLink></div>*/}
                                {/*<div><NavLink activeClassName={styles.active} to="/music">Music</NavLink></div>*/}


                                <SubMenu key="sub1" icon={<UserOutlined/>} title="My Profile">
                                    <Menu.Item key="1"><NavLink to="/profile">Profile</NavLink></Menu.Item>
                                    <Menu.Item key="2"><NavLink to="/dialogs">Dialogs</NavLink></Menu.Item>
                                    <Menu.Item key="3"><NavLink to="/news">News</NavLink></Menu.Item>
                                    <Menu.Item key="4"><NavLink to="/music">Music</NavLink></Menu.Item>

                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Users">
                                    <Menu.Item key="5"><NavLink to="/users">Users</NavLink></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<LaptopOutlined/>} title="ChatPage">
                                    <Menu.Item key="6"><NavLink to="/chat">ChatPage</NavLink></Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            <Switch>
                                <Route exact path="/"
                                       render={() => <Redirect to="/profile"/>}/>

                                {/*<Route path="/dialogs" render={() => <Dialogs  dispatch={props.dispatch} state={props.store.getState().dialogsPage}/>}/>*/}
                                <Route path="/dialogs"
                                       render={() => <Suspense
                                           fallback={<div>Loading...</div>}>
                                           <DialogsContainer/></Suspense>}/>
                                {/*<Route path="/dialogs" render={() => <Dialogs  dispatch={props.dispatch} state={props.store.dialogsPage}*/}
                                <Route path="/profile/:userId?"
                                       render={() =>
                                           <ProfileContainer/>} /*пробрасываем диспатч вмеесто функцый*//>
                                <Route path="/users" render={() =>
                                    <UsersContainer/>} /*пробрасываем диспатч вмеесто функцый*//>
                                <Route path="/login" render={() =>
                                    <Login/>} /*пробрасываем диспатч вмеесто функцый*//>
                                <Route path="/news" render={() =>
                                    <News/>}/>
                                <Route path="/music" render={() =>
                                    <Music/>}/>
                                <Route path="/chat" render={() =>
                                    <ChatPage/>}/>
                                <Route path="*" render={() =>
                                    <div>Page not found</div>}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>Pacavaca Design</Footer>
            </Layout>
        );
    }
}

const mapStateToProps = (state: StateReduxType): MapStateToPropsType => {
    return {
        initialized: state.appReducer.initialized
    }
}


type  MapStateToPropsType = {
    initialized: boolean
}
type  MapDispatchToProps = {
    initializeApp: () => void
}

type  OwnProps = {}

export default compose<React.ComponentType>(withRouter, connect<MapStateToPropsType, MapDispatchToProps, OwnProps, StateReduxType>(mapStateToProps, {initializeApp}))(App)
