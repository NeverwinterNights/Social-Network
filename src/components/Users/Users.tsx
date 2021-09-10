import React from 'react';
import styles from "./User.module.css";
import image from "../../img/neand.png";
import {UsersType} from "../../redux/users-reduсer";
import {NavLink} from 'react-router-dom';

type  UsersNewPropsType = {
    totalUsersCount: number
    pageSize: number
    setCurrentPage: (currentPage: number) => void
    setUsers: (users: Array<UsersType>) => void
    currentPage: number
    users: Array<UsersType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    OnClickPageHandler: (pageNumber: number) => void
    setFollowingInProgress: (userID: number, isFetching: boolean) => void
    followingInProgress: Array<number>
}

export const Users = (props: UsersNewPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)/* Math.ceil округляет число в большую сторону*/
    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={styles.main}>
            <div className={styles.pagination_wrapper}>
                {pages.map((t) => <span key={t}
                                        className={props.currentPage === t ? styles.selectedPage : ""}
                                        onClick={() => {
                                            props.OnClickPageHandler(t)
                                        }}>{t}</span>)}
            </div>
            {/*<button onClick={this.getUsers}>Get users from server</button>*/}
            {props.users.map((u) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                        <img className={styles.image} src={u.photos.small !== null ? u.photos.small : image} alt=""/>
                        </NavLink>
                    </div>
                    <div> {u.followed
                        ?
                        <button disabled={props.followingInProgress.some((t) => t === u.id)} onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        :
                        <button disabled={props.followingInProgress.some((t) => t === u.id)} onClick={() => {
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

