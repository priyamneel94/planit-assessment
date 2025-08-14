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
        stage('Install Node.js') {
            steps {
                script {
                    if (isUnix()) {
                        sh '''
                        if ! command -v node > /dev/null; then
                          curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
                          apt-get install -y nodejs
                        fi
                        node -v
                        '''
                    } else {
                        bat '''
                        where node || choco install nodejs-lts -y
                        node -v
                        '''
                    }
                }
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
            archiveArtifacts artifacts: 'playwright-report/**/*.*', allowEmptyArchive: true
        }
        failure {
            script {
                echo 'Build failed. Please check the logs for details.'
            }
        }
    }
}
