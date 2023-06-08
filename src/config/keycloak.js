import Keycloak from 'keycloak-js';

const keycloakConfig = {
    "realm": "crm-app",
    "url": "http://14.141.154.146:8087/",
    "clientId": "crm"
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;