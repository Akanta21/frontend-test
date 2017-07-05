export default function ({
    email,
    password,
    errors = {}
}) {
    if (!email) {
        errors.email = 'Please enter your email!'
    }

    if (!password) {
        errors.password = 'Please enter your valid password!'
    }

    return errors
}