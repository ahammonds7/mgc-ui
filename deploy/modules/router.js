const mainHost = 'magnoliagrovecollective.com'

async function handler(event) {
  const request = event.request;
  const host = request.headers.host.value;
  const path = request.uri

  if (!host.includes(mainHost)) {
    const subdomain = host.split('.')[0] === mainHost ? '' : `${host.split('.')[0]}.`
    const response = {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers:
        { "location": { "value": `https://${subdomain}${mainHost}${path}` } }
    }

    return response;
  }
  return request;
}
