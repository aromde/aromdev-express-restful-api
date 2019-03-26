


const getUserById = (id, pool) => {

    return new Promise((resolve, reject) => {
        pool.query(`SELECT * from tb_user where id = ${id}`, { type: pool.QueryTypes.SELECT }).then((res) => {

            resolve({
                result: res,
                error: false
            })
        }).catch(err => {
            reject({
                result: [],
                error: err
            })
        })
    })
}

export const userActions = {
    getUserById
}