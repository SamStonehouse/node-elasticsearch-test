# node-elasticsearch-test
A node app to quickly discern whether an elasticsearch instance is available

## Usage

Copy `config.json.dist` to a new file named `config.json`

Fill in config.json with your relevant information

- `host` is required
- `port` will default to 9200

Then run

    node main.js
