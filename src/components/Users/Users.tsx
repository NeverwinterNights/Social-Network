import React, {useEffect} from 'react';
import styles from "./Users.module.css";
import image from "../../img/neand.png";
import {
    FilterType,
    follow,
    getUsersThunkCreator,
    unfollow,
    UsersType
} from "../../redux/users-reduсer";
import {NavLink} from 'react-router-dom';
import {Paginator} from "./Paginator";
import {useDispatch, useSelector} from "react-redux";
import {UsersSearchForm} from "./UsersSearchForm";
import {StateReduxType} from "../../redux/redux-store";
import {getCurrentPage, getPageSize} from "../../redux/users-selectors";


export const Users = () => {
    const dispatch = useDispatch()

    const totalUsersCount = useSelector<StateReduxType, number>(state => state.usersPage.totalUsersCount)
    const currentPage = useSelector<StateReduxType, number>(getCurrentPage)
    const pageSize = useSelector<StateReduxType, number>(getPageSize)
    const filter = useSelector<StateReduxType, FilterType>(state => state.usersPage.filter)
    const users = useSelector<StateReduxType, Array<UsersType>>(state => state.usersPage.users)
    const followingInProgress = useSelector<StateReduxType, Array<number>>(state => state.usersPage.followingProgress)

    useEffect(() => {
        dispatch(getUsersThunkCreator(currentPage, pageSize, filter))
    }, [])


    const OnClickPageHandler = (pageNumber: number) => {
        dispatch(getUsersThunkCreator(pageNumber, pageSize, filter))
    }

    const OnFilterHandler = (filter: FilterType) => {
        dispatch(getUsersThunkCreator(1, pageSize, filter))
    }

    const followUser = (userID: number) => {
        dispatch(follow(userID))
    }


    const unfollowUser = (userID: number) => {
        dispatch(unfollow(userID))
    }


    return (
        <div className={styles.main}>

            <UsersSearchForm OnFilterHandler={OnFilterHandler}/>

            <Paginator currentPage={currentPage}
                       OnPageHandler={OnClickPageHandler}
                       totalUsersCount={totalUsersCount} pageSize={pageSize}
                       portionSize={10}
            />

            {users.map((u) => {
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
                            disabled={followingInProgress.some((t) => t === u.id)}
                            onClick={() => {
                                unfollowUser(u.id)
                            }}>Unfollow</button>
                        :
                        <button
                            disabled={followingInProgress.some((t) => t === u.id)}
                            onClick={() => {
                                followUser(u.id)
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


