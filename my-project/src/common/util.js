export function formatGetUri(obj) {
    const params = []
    Object.keys(obj).forEach((key) => {
        let value = obj[key]
        if (typeof value !== 'undefined' || value !== null) {
            params.push([key, encodeURIComponent(value)].join('='))
        }
    })
    return '?' + params.join('&')
}