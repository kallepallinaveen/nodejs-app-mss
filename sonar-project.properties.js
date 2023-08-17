const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
	serverUrl: 'http://54.80.150.167:9000',
		 options : {
		  'sonar.projectDescription': 'This is a Node JS application',
		  'sonar.projectName': 'Node JS Application - Sample',
		  'sonar.projectKey': 'nodejs',
		  'sonar.login': 'sqa_45a781a36accb06604e867fd82dc4a24bd3ac70c',
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