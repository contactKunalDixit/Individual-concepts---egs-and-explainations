/**   
*   EasyHTTP Library: Library for making HTTP requests
/   This library uses : 
/   Fetch
/   ES6 classes
/   Promises

*   @version    2.0.0
*   @author     Kunal Dixit
*   @license    MIT
*
*/

class EasyHTTP {
    /* We dont need a constructor because we dont need an HXR object like in previous version */

    // Make HTTP get request
    get(url) {
        fetch(url)
            .then(res => res.json())
            .then(data =>return(data))
            .catch(err =>console.log(err))
    }

}