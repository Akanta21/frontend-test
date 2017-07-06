export default (query, search) => {
    const params = new URLSearchParams(query);
    const foo = params.get(search)

    return foo
}