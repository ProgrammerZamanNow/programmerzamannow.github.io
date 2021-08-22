pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Build') {
            steps {
                sh 'yarn build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'GIT_USER=khannedy USE_SSH=true DEPLOYMENT_BRANCH=gh-pages yarn deploy'
            }
        }
    }
}
