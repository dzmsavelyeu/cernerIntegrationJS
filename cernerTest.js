<script src="./node_modules/fhirclient/build/fhir-client.js"></script>
<script>
FHIR.oauth2.authorize({
    "client_id": "my_web_app",
    "scope": "patient/*.read"
});
</script>