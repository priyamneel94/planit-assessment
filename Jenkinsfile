pipeline {
    agent any

    environment {
        NODE_ENV = 'test'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm install'
                        sh 'npx playwright install'
                    } else {
                        bat 'npm install'
                        bat 'npx playwright install'
                    }
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    if (isUnix()) {
                            sh 'npx playwright test --project=chromium'
                    } else {
                            bat 'npx playwright test --project=chromium'
                    }
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/test-results/**/*.*', allowEmptyArchive: true
        }
        failure {
            script {
                echo 'Build failed. Please check the logs for details.'
            }
        }
    }
}
