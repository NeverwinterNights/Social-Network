import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {
    follow,
    setCurrentPage,
    setPreloader,
    setTotalUsersCount,
    setUsers,
    unFollow,
    UsersType
} from "../../redux/users-reduсer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../preloader/Preloader";


type UsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

    setUsers: (users: Array<UsersType>) => void
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setPreloader: (isFetching: boolean) => void
}

class UsersContainer extends React.Component <UsersPropsType, RootStateType> {
    componentDidMount() {
        this.props.setPreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {/*запрос на сервак, зен респонс это ответ*/
            this.props.setPreloader(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)

        })
    }

    OnClickPageHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setPreloader(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {/*запрос на сервак, зен респонс это ответ*/
            this.props.setPreloader(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    setCurrentPage={this.props.setCurrentPage}
                    setUsers={this.props.setUsers}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unFollow}
                    OnClickPageHandler={this.OnClickPageHandler}
                />
            </>
        )
    }
}


export const mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,  /*отправляет стейт в компоненту*/
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// export const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         follow: (userID: number) => {
//             dispatch(follow(userID))
//         },
//         unfollow: (userID: number) => {
//             dispatch(unFollow(userID))
//         },
//         setUsers: (users: Array<UsersType>) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPage(currentPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setUsersTotalCount(totalCount))
//         },
//         setPreloader: (isFetching: boolean) => {
//             dispatch(setPreloader(isFetching))
//         },
//
//     }
// } /*описана прямо внутри коннекта новым способом*/


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setPreloader
})(UsersContainer) /*получаем новую контейнерную компоненту*/

