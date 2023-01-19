set -a
source .env
set +a
if [ -z ${SWAGGER_CONFIG_PATH+x} ];
then echo "SWAGGER_CONFIG_PATH is unset";
else curl -o openapi.yaml "$SWAGGER_CONFIG_PATH";
fi