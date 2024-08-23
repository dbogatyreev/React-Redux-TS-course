import { Dispatch } from "redux"
import { UserAction, UserActionTypes } from "../../types/user"
import axios from "axios"

export const fetchUsers = () => {
    return async (dispacth: Dispatch<UserAction>) => {
        try {
            dispacth({ type: UserActionTypes.FETCH_USERS })
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(() => {
                dispacth({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data })
            }, 500)
        } catch (e) {
            dispacth({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}