export const ENDPOINT
    = 'https://raw.githubusercontent.com/kriskate/jitsi-meet/master/react/mock/data.json';

export const getData = async () =>
    fetch(ENDPOINT)
        .then(res => res.json())
        .then(data => data);
