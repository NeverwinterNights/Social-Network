import React from 'react';
import styles from "./User.module.css"
import image from "../../img/neand.png";
import axios from "axios";
import {RootStateType} from "../../redux/store";
import {UsersType} from '../../redux/users-reduсer';


type UsersPropsType = {
    users: Array<UsersType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UsersType>) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}


class UsersComp extends React.Component <UsersPropsType, RootStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {/*запрос на сервак, зен респонс это ответ*/
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)

        })
    }

    OnClickPageHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        console.log(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {/*запрос на сервак, зен респонс это ответ*/
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)/* Math.ceil округляет число в большую сторону*/
        let pages: Array<number> = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div className={styles.main}>
                <div className={styles.pagination_wrapper}>
                    {pages.map((t) => <span key={t}
                                            className={this.props.currentPage === t ? styles.selectedPage : ""}
                                            onClick={() => {
                                                this.OnClickPageHandler(t)
                                            }}>{t}</span>)}
                </div>
                {/*<button onClick={this.getUsers}>Get users from server</button>*/}
                {this.props.users.map((u) => <div key={u.id}>
                <span>
                    <div> <img className={styles.image} src={u.photos.small !== null ? u.photos.small : image} alt=""/></div>
                    <div> {u.followed ? <button onClick={() => {
                        this.props.unfollow(u.id)
                    }}>Unfollow</button> : <button onClick={() => {
                        this.props.follow(u.id)
                    }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                    <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
                }
            </div>
        )
    }
}

export default UsersComp