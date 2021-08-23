import React from 'react';
import {UsersType} from "../../redux/users-reduсer";
import styles from "./User.module.css"


type UsersPropsType = {
    users: Array<UsersType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UsersType>) => void
}


export const Users = (props: UsersPropsType) => {
    if (props.users.length===0) {
        props.setUsers(
            [
                {
                    id: 1,
                    imageURL: "https://static.ukrinform.com/photos/2020_02/thumb_files/630_360_1580657832-217.png",
                    followed: false,
                    fullName: "Ivan",
                    status: "I like football",
                    location: {city: "Urupinsk", country: "Russia"}
                },
                {
                    id: 2,
                    imageURL: "https://static.ukrinform.com/photos/2020_02/thumb_files/630_360_1580657832-217.png",
                    followed: true,
                    fullName: "Oleg",
                    status: "I'm cant live without beer",
                    location: {city: "Tokyo", country: "Japan"}
                },
                {
                    id: 3,
                    imageURL: "https://static.ukrinform.com/photos/2020_02/thumb_files/630_360_1580657832-217.png",
                    followed: true,
                    fullName: "Jhon",
                    status: "Just married",
                    location: {city: "London", country: "UK"}
                },
                {
                    id: 4,
                    imageURL: "https://static.ukrinform.com/photos/2020_02/thumb_files/630_360_1580657832-217.png",
                    followed: true,
                    fullName: "Alex",
                    status: "No way in this way",
                    location: {city: "Paris", country: "Mars"}
                },
            ],
        )
    }


    return (
        <div>
            {props.users.map((u) => <div key={u.id}>
                <span>
                    <div> <img className={styles.image} src={u.imageURL} alt=""/></div>
                    <div> {u.followed ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</button> : <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                    <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
            }
        </div>
    );
};

