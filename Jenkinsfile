pipeline {
    agent any
    environment {
        SITE = 'https://afternoon-hamlet-55160.herokuapp.com/'
    }
    
    tools {
        nodejs 'NodeJs'
    }

    stages {
        stage ('Clone repository') {
            steps {
                git 'https://github.com/CheronoK/gallery.git'
            }
        }

        stage ('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage ('Run tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy to Heroku') {
          steps {
              withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS' )]){
                    sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/afternoon-hamlet-55160.git master'
              }
          }
        }
    }
  post {
    success {
      slackSend color: "good", message: "Build ${env.BUILD_NUMBER} of ${env.JOB_NAME} Succeeded. Deployed at ${LIVE_SITE}"
    }
    failure {
      slackSend color: "danger", message: "Build ${env.BUILD_NUMBER} of ${env.JOB_NAME} failed. See ${env.BUILD_URL} for details."
    }
  }

}
