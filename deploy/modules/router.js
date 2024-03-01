var mainHost = 'magnoliagrovecollective.com'

function handler(event) {
  var request = event.request;
  var host = request.headers.host.value;
  var path = request.uri

  // magnoliagrovecollective.com
  // qa.magnoliagrovecollective.com

  if (!host.includes(mainHost)) {
    var subdomain = ''
    
    var urlParts = host.split('.')
    if (urlParts.length >= 3) {
      urlParts.splice(-2)
      subdomain = `${urlParts.join('.')}.`
    }
    
    var response = {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers:
        { "location": { "value": `https://${subdomain}${mainHost}${path}` } }
    }

    return response;
  }
  return request;
}
