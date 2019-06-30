import fetch from 'node-fetch'
import * as yaml from 'js-yaml'

export {
    pickup,
}

function pickup() {
    return fetch('https://api.syosetu.com/novelapi/api/?libtype=2&ispickup=1&order=hyoka&lim=200')
        .then(res => res.text())
        .then(body => yaml.safeLoad(body))
        .then(json => json)
        .catch(function (err) {
            err
        });
}