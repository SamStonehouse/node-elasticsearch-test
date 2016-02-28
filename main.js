const elasticsearch = require('elasticsearch');
const config = require('./config.json');

const port = config.port || '9200';

const connectionString = `${config.host}:${port}`;

const client = new elasticsearch.Client({
	host: connectionString,
	log: 'trace'
});

client.ping({}, function (error) {
	if (error) {
		console.log('Failed to connect to elasticsearch');
	} else {
		console.log('Connected to elasticsearch');
	}

	client.close();
});
