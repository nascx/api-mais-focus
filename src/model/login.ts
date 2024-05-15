import { pool } from '../config/db'

export const insertUserDB = async (name: string, email: string, password: string) => {
    const q = 'INSERT INTO users (email, name, password) VALUES ($1, $2, $3)'
    const values = [email, name, password]
    try {
        return new Promise((resolve, reject) => {
            pool.query(q, values, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve('Data entered successfully')
                }

            })
        })
    } catch (err) {
        throw err
    }
}

export const getPasswordByEmail = (email: any) => {
    const q = 'SELECT password FROM users WHERE email = $1'
    try {
        return new Promise((resolve, reject) => {
            pool.query(q, [email], (err, data) => {
                if(err){
                    reject(err)
                }
                if (data.rows && data.rows.length > 0) {
                    resolve(data.rows[0].password)
                } else {
                    reject('Not found')
                }
            })
        })
    } catch (error) {
        throw error
    }
} 

/* (async () => {
    try {
        const teste = await getPasswordByEmail('teste@gmail.com')
        console.log(teste)
    } catch (err) {
        console.log(err)
    }
})() */