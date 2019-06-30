import fetch from 'node-fetch'
import * as yaml from 'js-yaml'

function getUser(id: string): object {
    return fetch('https://api.syosetu.com/novelapi/api/?libtype=2&')
        .then(res => res.text())
        .then(body => yaml.safeLoad(body))
        .then(json => json)
        .catch(function (err) {
            err
        });
}

export default class User {
    id: string;
    name: string;

    constructor(public id: string) {
        this.id = id;

    }
}