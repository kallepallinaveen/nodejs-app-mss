
const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://172.18.102.114:9000',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    'sonar.projectKey': 'nodejs',
	    'sonar.login': 'sqp_d27006250eb13574e92b16e9710a498f4ea40e70',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'admin123',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
} ); 