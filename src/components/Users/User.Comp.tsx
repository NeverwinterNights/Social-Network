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
}


class UsersComp extends React.Component <UsersPropsType, RootStateType> {
    constructor(props:UsersPropsType) {
        super(props);
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {/*запрос на сервак, зен респонс это ответ*/
                debugger
                this.props.setUsers(response.data.items)
            })
        }
    }

    render() {
        return (
            <div>
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