fetch("url", {
  "credentials":"include",
  "headers":{"accept":"image/webp,image/apng,image/*,*/*;q=0.8",
            "accept-language":"en-US,en;q=0.9",
            "cache-control":"no-cache",
            "pragma":"no-cache",
            "sec-fetch-mode":"no-cors",
            "sec-fetch-site":"same-site"},
  "referrer":"https://stackoverflow.com/questions/31039629/convert-curl-get-to-javascript-fetch",
  "referrerPolicy":"no-referrer-when-downgrade",
  "body":null,
  "method":"GET",
  "mode":"cors"});

curl 'url' 
-H 'authority: clc.stackoverflow.com' 
-H 'pragma: no-cache' 
-H 'cache-control: no-cache' 
-H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36' 
-H 'accept: image/webp,image/apng,image/*,*/*;q=0.8' 
-H 'sec-fetch-site: same-site' 
-H 'sec-fetch-mode: no-cors' 
-H 'referer: https://stackoverflow.com/questions/31039629/convert-curl-get-to-javascript-fetch' 
-H 'accept-encoding: gzip, deflate, br' 
-H 'accept-language: en-US,en;q=0.9' 
-H 'cookie: prov=a1a73b2f-5af7-cb7d-b7b3-ccb03c660393; _ga=GA1.2.1072002611.1565389108; __qca=P0-1779521953-1565389107756; _gid=GA1.2.964786247.1577742129; _gat=1' 
--compressed


curl https://35.245.163.26/api/v1/nodes/gke-message-cluster-default-pool-ec6d97c8-htxh 
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJkZWZhdWx0Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6ImRlZmF1bHQtdG9rZW4tYm44NWsiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZGVmYXVsdCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6ImY2NjJiZmRlLTJiMWQtMTFlYS1hYzNkLTQyMDEwYTk2MDA1YSIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDpkZWZhdWx0OmRlZmF1bHQifQ.ZXAgygUNZdVj-3SDyBpfm8rz_vw19PFDn4Hal8TYdBbi4rLYowgZskKa6E3WdgflQ0FPPYk9BeIMcKTzPl6GLiz4KIEvH4wzX3OgI8bM-dQMJOs3VWyz1w-iMxEP9ekX6tbyXKwWUpJc23HSYneYgSWhur4KWoZ-7CVT9V8erSIT7siZF_ubmtnFRMOktZpZSATiVDz33OaEVbsweEtGsUm_5CD1HoFDdrZedrK_UBQEiq0gtvvDxynE9QA8w-lnt8sGyxb8nKRLt9Ea_1gt9xw4J3Dd7RE_WGRSX7-l85TlJ8naHnou3YWk6PahVFtUl1R1jEwVbMTz87v5wqjibQ" --insecure