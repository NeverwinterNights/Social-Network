import React from 'react';
import styles from "./Users.module.css";
import image from "../../img/neand.png";
import {UsersType} from "../../redux/users-reduсer";
import {NavLink} from 'react-router-dom';
import {Paginator} from "./Paginator";
import {useDispatch} from "react-redux";

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
    const dispatch = useDispatch()


    return (
        <div className={styles.main}>

            <Paginator currentPage={props.currentPage}
                       OnPageHandler={props.OnClickPageHandler}
                       totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                       portionSize={10}
            />

            {props.users.map((u) => {
                // const followHandler = () => {
                //     dispatch(props.follow(u.id))
                // }


                return <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                        <img className={styles.image}
                             src={u.photos.small !== null ? u.photos.small : image}
                             alt=""/>
                        </NavLink>
                    </div>
                    <div> {u.followed
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
                </div>
            }
            )
            }
        </div>
    );
};

