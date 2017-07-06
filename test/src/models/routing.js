export default {
    namespace: 'routing',
    state: {
        boy: 'a'
    },
    reducers: {
        set: (state, {payload: path}) => {
            return ({...state, location:{pathname: path} })
        }
    }
}