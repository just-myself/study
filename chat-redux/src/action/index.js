let nextList = 0
export const AddOne = (name, numb, signature) => ({
    type: "ADD_LIST",
    key: nextList++,
    name,
    numb,
    signature
})
export const DeleteOne = (key) => ({type: "DELETE_LIST", key})
export const ChangeOne = (id) => ({type: "CHANGE_LIST", id})
export const SaveOne = (arr) => ({type: "SAVE_LIST", arr})
export const createThunkAction = (payload) => {
    console.log(payload);

    return (dispatch, getState) => {

        setTimeout((payload) => {

            dispatch(SaveOne(payload))
        }, 1000)
    }
}