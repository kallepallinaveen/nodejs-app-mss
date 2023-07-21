pipeline{
    agent any
    stages{
        stage("build"){
            steps{
                nodejs(nodeJSInstallationName: 'nodejs18.6.0') {
                    sh "npm install"
                }
            }
        }
        stage("sonar scanner"){
            steps{
                nodejs(nodeJSInstallationName: 'nodejs18.6.0') { 
                    withSonarQubeEnv('sonar'){
                        sh "npm install sonar-scanner"
                        sh "npm run sonar"
                    }
                }
            }
        }
        stage("artifacts"){
            steps{
                nodejs(nodeJSInstallationName: 'nodejs18.6.0') {
                    sh "npm publish"
                }
            }
        }
    }
}

// sonar-scanner \
//  -Dsonar.projectKey=nodejs \
 // -Dsonar.sources=. \
  //-Dsonar.host.url=http://172.18.102.114:9000 \
  //-Dsonar.token=sqp_ded3753c8345b3ed3ae8bf0ff3c58c9a92b6bf96 