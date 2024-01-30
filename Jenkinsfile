pipeline {
  agent any
  stages {
    stage('stage 1') {
      steps {
        echo 'Hello'
      }
    }

  }
  environment {
    NODE_ENV = 'development'
    PORT = '3000'
    DATABASE_URL = 'mongodb+srv://admin:Ra5zAryED964hUy5@cluster0.grlseth.mongodb.net/brainscape'
    BCRYPT_SALT_ROUNDS = '12'
    JWT_SECRET = '54321'
    JWT_REFRESH_SECRET = 'asdasd'
    JWT_EXPIRES_IN = '1d'
    JWT_REFRESH_EXPIRES_IN = '1yr'
  }
}