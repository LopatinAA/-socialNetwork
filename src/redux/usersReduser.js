const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // { id: 1, followed: false,  photoUrl: 'https://avatars.mds.yandex.net/i?id=6c854abc6588200fccc86aff11e66a86997effb4-9053276-images-thumbs&n=13', fullName: 'Dmitry', status: 'im a boss', location: { city: 'minsk', country: 'Belarus' } },
        // { id: 2, followed: true,  photoUrl: 'https://avatars.mds.yandex.net/i?id=6c854abc6588200fccc86aff11e66a86997effb4-9053276-images-thumbs&n=13', fullName: 'Oleg', status: 'im a', location: { city: 'minsk', country: 'Belarus' } },
        // { id: 3, followed: true,  photoUrl: 'https://avatars.mds.yandex.net/i?id=6c854abc6588200fccc86aff11e66a86997effb4-9053276-images-thumbs&n=13', fullName: 'Anton', status: 'im', location: { city: 'minsk', country: 'Belarus' } },
        // { id: 4, followed: false,  photoUrl: 'https://avatars.mds.yandex.net/i?id=6c854abc6588200fccc86aff11e66a86997effb4-9053276-images-thumbs&n=13', fullName: 'Mark', status: '', location: { city: 'minsk', country: 'Belarus' } },
    ],
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return  {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId)
                        return { ...user, followed: true }
                    return user
                })
            }
        }  
        case UNFOLLOW: {
            return{
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId)
                        return { ...user, followed: false }
                    return user
                })
            }
        }
        case SET_USERS: {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
