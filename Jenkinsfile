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
        
        stage('Building') {
            steps {
                dir('brainscape-backend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Start') {
            steps {
                dir('brainscape-backend') {
                    sh 'npm run start'
                }
            }
        }
    }
}
