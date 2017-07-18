export default function ({
    question,
    answer,
    errors = {}
}) {
    if (!question) {
        errors.question = 'Please enter your question!'
    }

    if (!answer) {
        errors.answer = 'Please enter your valid answer!'
    }

    return errors
}