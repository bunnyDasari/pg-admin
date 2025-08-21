const client = require('./db')


async function main() {
    await client.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100) UNIQUE
    )
  `)
    console.log("Table created")

    const res = await client.query(
        "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
        ["rohawwwn", "rohan1www2@gmail.com"]
    )
    console.log("Inserted:", res.rows[0])

    const res1 = await client.query("SELECT * FROM users")
    console.log("Users:", res1.rows)
}

main()