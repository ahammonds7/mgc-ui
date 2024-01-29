let mainHost = 'magnoliagrovecollective.com'

function handler(event) {
  let request = event.request;
  let host = request.headers.host.value;
  let path = request.uri

  if (!host.includes(mainHost)) {
    let subdomain = host.split('.')[0] === mainHost ? '' : `${host.split('.')[0]}.`
    let response = {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers:
        { "location": { "value": `https://${subdomain}${mainHost}${path}` } }
    }

    return response;
  }
  return request;
}
