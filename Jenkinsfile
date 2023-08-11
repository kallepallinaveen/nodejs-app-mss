pipeline{
    agent any
    stages{
        stage("build"){
            steps{
                nodejs(nodeJSInstallationName: 'nodejs15.3.0') {
                    sh "npm install"
                }
            }
        }
        stage("sonar scanner"){
            steps{
                nodejs(nodeJSInstallationName: 'nodejs15.3.0') { 
                    withSonarQubeEnv('sonar'){
                        sh "npm install sonar-scanner"
                        sh "${scannerHome}/bin/sonar-scanner:npm run sonar"
                    }
                }
            }
        }
        stage("runNodejs "){
            steps{
                nodejs(nodeJSInstallationName: 'nodejs15.3.0') {
                    sh "npm start &"
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