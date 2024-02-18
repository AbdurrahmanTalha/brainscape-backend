pipeline {
    agent any
    
    stages {
        stage('Delete Existing Folder') {
            steps {
                sh 'rm -rf brainscape-backend || true'
            }
        }
        
        stage('Clone Repository') {
            steps {
                sh "git clone 'https://github.com/AbdurrahmanTalha/brainscape-backend.git'"
            }
        }
        
        stage('Install dependencies') {
            steps {
                dir('brainscape-backend') {
                    sh 'npm install'
                }
            }
        }
        
        stage('Build Project') {
            steps {
                dir('brainscape-backend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Build Docker') {
            steps {
                dir('brainscape-backend') {
                    sh 'docker build -t brainscape-backend ./'
                }
            }
        }

        stage('Running Project') {
            steps {
                dir('brainscape-backend') {
                    sh 'docker run -p 8000:8000 -d brainscape-backend'
                }
            }
        }
    }
}
