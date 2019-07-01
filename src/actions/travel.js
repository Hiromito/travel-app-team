import { db, firebaseAuth } from '../config/constants'

export function create (email,destination, startdate, enddate, comment) {
    return (dispatch) => new Promise(async (resolve, reject) => {
        db.collection("travel").add({
            email: email,
            destination: destination,
            startdate: startdate,
            enddate: enddate,
            comment: comment,
          }).then(async () => {
            resolve(dispatch({
                type: 'success'
            }))
        }).catch(reject)
      }).catch(async (err) => {
        throw err
      })
}

