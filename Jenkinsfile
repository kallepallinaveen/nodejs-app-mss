pipeline{
    agent any
    stages{
        stage("build stage"){
            steps{
                nodejs(nodeJSInstallationName: 'Nodejs 20.4.0') {
                    sh "npm install"
                }
            }
        }
    }
}