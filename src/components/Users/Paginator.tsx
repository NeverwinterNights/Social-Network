import React, {useState} from 'react';
import styles from "./Users.module.css";

type  UsersNewPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    OnPageHandler: (pageNumber: number) => void
    portionSize: number
}

export const Paginator = ({
                              totalUsersCount,
                              pageSize,
                              currentPage,
                              OnPageHandler,
                              portionSize = 10
                          }: UsersNewPropsType) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={styles.main}>
            <div className={styles.pagination_wrapper}>
                {portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREV</button>}
                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((t) => {
                    return <span key={t}
                                 className={currentPage === t ? styles.selectedPage : ""}
                                 onClick={() => {
                                     OnPageHandler(t)
                                 }}>{t}</span>
                })}
                {portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>}
            </div>
        </div>
    );
};

