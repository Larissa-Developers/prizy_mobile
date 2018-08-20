const api_key = '423d96921e1b5d7610f44717c122'
const url = 'https://api.meetup.com/Larissa-Developers-Meetup/events?'
const status = '&status=past'
const key = '&key=' + api_key

export function getUrl () {
  return url + key + status
}