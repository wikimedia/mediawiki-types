# TypeScript definitions of MediaWiki front end code interfaces

NOTE: This exists as a separate repository for the time being. It has been created with idea in mind that it those definitions could be maintained together with MediaWiki front end code itself.

## Development

### Building Docker image

```sh
# ensure the node user uses your user id, so you own generated files
docker-compose build --build-arg UID=$(id -u) --build-arg GID=$(id -g) node
```
