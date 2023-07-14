pipeline{
    agent any
    stages{
        stage("build stage"){
            steps{
                nodejs(nodeJSInstallationName: 'v12.22.9') {
                    sh "npm install"
                }
                
            }
        }
    }
}