const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
	serverUrl: 'http://52.90.139.174:9000',
		 options : {
		  'sonar.projectDescription': 'This is a Node JS application',
		  'sonar.projectName': 'Node JS Application - Sample',
		  'sonar.projectKey': 'nodejs',
		  'sonar.login': 'f0fc4fbde0dec95b8dbe27ac2bce73bd73983126',
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