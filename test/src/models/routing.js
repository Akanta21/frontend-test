export default {
    namespace: 'routing',
    state: {
        boy: 'a'
    },
    reducers: {
        set: (state, {payload: path}) => {
            console.log(path)
            return ({...state, location:{pathname: path} })
        }
    }
}