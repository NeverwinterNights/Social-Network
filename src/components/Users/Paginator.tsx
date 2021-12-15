import React from 'react';
import styles from "./Users.module.css";

type  UsersNewPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    OnPageHandler: (pageNumber: number) => void
}

export const Paginator = ({
                              totalUsersCount,
                              pageSize,
                              currentPage,
                              OnPageHandler
                          }: UsersNewPropsType) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)/* Math.ceil округляет число в большую сторону*/
    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.main}>
            <div className={styles.pagination_wrapper}>
                {pages.map((t) => <span key={t}
                                        className={currentPage === t ? styles.selectedPage : ""}
                                        onClick={() => {
                                            OnPageHandler(t)
                                        }}>{t}</span>)}
            </div>
        </div>
    );
};

