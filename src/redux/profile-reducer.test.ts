import {addPostActionCreator, deletePostActionCreator, profileReducer} from "./profile-reducer";


test('name of action of the test', () => {

    /*Входные данные*/

    let action = addPostActionCreator("it-kamasutra")

    let initialState = {
        posts: [
            {id: 1, message: "Hello", likesCount: 8},
            {id: 2, message: "How are you?", likesCount: 15},
            {id: 3, message: "Where are you?", likesCount: 50},
            {id: 4, message: "Fuck You", likesCount: 5},

        ],
        profile: null,
        status: ""
    }


    /*2, Действие теста, применение написанной функции из компоненты*/

    let newState = profileReducer(initialState, action)


    /*3, То, что ожидаем получить*/


    expect(newState.posts.length).toBe(5);

});

test('delete post', () => {

    /*Входные данные*/

    let action = deletePostActionCreator(1)

    let initialState = {
        posts: [
            {id: 1, message: "Hello", likesCount: 8},
            {id: 2, message: "How are you?", likesCount: 15},
            {id: 3, message: "Where are you?", likesCount: 50},
            {id: 4, message: "Fuck You", likesCount: 5},

        ],
        profile: null,
        status: ""
    }


    /*2, Действие теста, применение написанной функции из компоненты*/

    let newState = profileReducer(initialState, action)


    /*3, То, что ожидаем получить*/


    expect(newState.posts.length).toBe(3);

});


