import moment from 'moment'

export const timeConverter = (seconds) => {
    return moment(seconds).format('MMMM Do YYYY, h:mm:ss a');
}