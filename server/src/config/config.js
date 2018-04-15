module.exports = {
  port: process.env.PORT || 8081,
    db: {
      database: process.env.DB_NAME || 'mentalcomposing',
      user: process.env.DB_USER || 'mentalcomposing' ,
      password: process.env.DB_PASS || 'mentalcomposing',
      options: {
          operatorsAliases: false,
          dialect: process.env.HOST || 'sqlite',
          host: process.env.HOST || 'localhost',
          storage: './mentalcomposing.sqlite'
      }
    }
}

