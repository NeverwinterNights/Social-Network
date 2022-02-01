import React from 'react';
import styles from "./Users.module.css";
import image from "../../img/neand.png";
import {FilterType, UsersType} from "../../redux/users-reduсer";
import {NavLink} from 'react-router-dom';
import {Paginator} from "./Paginator";
import {useDispatch} from "react-redux";
import {UsersSearchForm} from "./UsersSearchForm";


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
    OnFilterHandler: (filter: FilterType) => void
}

export const Users = (props: UsersNewPropsType) => {
    const dispatch = useDispatch()


    return (
        <div className={styles.main}>

            <UsersSearchForm OnFilterHandler={props.OnFilterHandler}/>

            <Paginator currentPage={props.currentPage}
                       OnPageHandler={props.OnClickPageHandler}
                       totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                       portionSize={10}
            />

            {props.users.map((u) => {
                    return <div className={styles.item} key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                        <img className={styles.image}
                             src={u.photos.small !== null ? u.photos.small : image}
                             alt=""/>
                        </NavLink>
                    </div>
                    <div className={styles.follow}> {u.followed
                        ?
                        <button
                            disabled={props.followingInProgress.some((t) => t === u.id)}
                            onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                        :
                        <button
                            disabled={props.followingInProgress.some((t) => t === u.id)}
                            onClick={() => {
                                props.follow(u.id)
                            }}
                        >Follow</button>}
                    </div>
                      <span>
                            <div className={styles.wrap}>
                    <span className={styles.desc}>Name</span> <div
                                className={styles.name}>{u.name}</div>

                    </div>

                </span>
                </span>

                    </div>
                }
            )
            }
        </div>
    );
};


