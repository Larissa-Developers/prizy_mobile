import { database } from 'firebase'

export function insert (ref, data, onSuccess, errorCb) {
  database().ref(ref).push(data)
    .then(onSuccess)
    .catch(errorCb)
}

export function getAll (ref) {
  return database().ref(ref).once('value')
}

export function get (ref) {
  return database().ref(ref).once('value')
}

export function update (ref, data, onComplete) {
  let updates = {}
  updates[ref] = data
  return database().ref().update(updates, onComplete)
}

export function remove (ref, onSuccess, onError) {
  let updates = {}
  updates[ref] = null

  return database().ref().update(updates)
    .then(onSuccess)
    .catch(onError)
}

export function getLastInserted (ref) {
  return database().ref(ref).orderByKey().limitToLast(1).once('value')
}