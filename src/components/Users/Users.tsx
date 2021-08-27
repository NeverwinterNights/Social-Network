import React from 'react';
import styles from "./User.module.css";
import image from "../../img/neand.png";
import axios from "axios";
import {UsersType} from "../../redux/users-reduсer";


type  UsersNewPropsType = {
    totalUsersCount: number
    pageSize: number
    setCurrentPage: (currentPage: number) => void
    setUsers: (users: Array<UsersType>) => void
    currentPage: number
    users: Array<UsersType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}


export const Users =(props: UsersNewPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)/* Math.ceil округляет число в большую сторону*/
    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    const OnClickPageHandler = (pageNumber: number) => {
        props.setCurrentPage(pageNumber)
        console.log(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`).then(response => {/*запрос на сервак, зен респонс это ответ*/
            props.setUsers(response.data.items)
        })
    }

 return (

            <div className={styles.main}>
                <div className={styles.pagination_wrapper}>
                    {pages.map((t) => <span key={t}
                                            className={props.currentPage === t ? styles.selectedPage : ""}
                                            onClick={() => {
                                                OnClickPageHandler(t)
                                            }}>{t}</span>)}
                </div>
                {/*<button onClick={this.getUsers}>Get users from server</button>*/}
                {props.users.map((u) => <div key={u.id}>
                <span>
                    <div> <img className={styles.image} src={u.photos.small !== null ? u.photos.small : image} alt=""/></div>
                    <div> {u.followed ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</button> : <button onClick={() => {
                        props.follow(u.id)
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

    );
};

