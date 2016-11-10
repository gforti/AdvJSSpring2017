
function makeRequest(url, verb, data, callback) {

    var httpRequest = new XMLHttpRequest();

     httpRequest.open(verb, url, true);

     if ( verb === 'GET' ) {
        httpRequest.send(null);
    } else {
        httpRequest.setRequestHeader('Content-type','application/x-www-form-urlencoded');                    
        httpRequest.send(data);
    }

    httpRequest.addEventListener('load', callback.bind(httpRequest));
    httpRequest.addEventListener('error', callback.bind(httpRequest));

}


function makeRequestPromise(url, verb, data) {
            
    var promise = new Promise( httpPromise );

    function httpPromise(resolve, reject) {
        var httpRequest = new XMLHttpRequest();

         httpRequest.open(verb, url, true);

         if ( verb === 'GET' ) {
            httpRequest.send(null);
        } else {
            httpRequest.setRequestHeader('Content-type','application/x-www-form-urlencoded');
            httpRequest.send(data);
        }

         httpRequest.addEventListener('load', httpResolve.bind(httpRequest));
         httpRequest.addEventListener('error', httpReject.bind(httpRequest));

         function httpResolve() {                        
            if ( this.status >= 200 && this.status < 300 ) {
                // Performs the function "resolve" when this.status is equal to 2xx
                resolve(JSON.parse(this.response));
            } else {
                // Performs the function "reject" when this.status is different than 2xx
                reject(this.statusText);
            }                          
         }

         function httpReject() {
             reject(this.statusText);
         }

    }

    // Return the promise
    return promise;
}