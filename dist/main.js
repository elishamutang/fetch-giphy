;(() => {
    'use strict'
    var t = {}
    ;(t.g = (function () {
        if ('object' == typeof globalThis) return globalThis
        try {
            return this || new Function('return this')()
        } catch (t) {
            if ('object' == typeof window) return window
        }
    })()),
        (() => {
            var e
            t.g.importScripts && (e = t.g.location + '')
            var r = t.g.document
            if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
                var a = r.getElementsByTagName('script')
                if (a.length) for (var n = a.length - 1; n > -1 && (!e || !/^http(s?):/.test(e)); ) e = a[n--].src
            }
            if (!e) throw new Error('Automatic publicPath is not supported in this browser')
            ;(e = e
                .replace(/#.*$/, '')
                .replace(/\?.*$/, '')
                .replace(/\/[^\/]+$/, '/')),
                (t.p = e)
        })()
    const e = t.p + 'github-mark.png',
        r = document.querySelector('form'),
        a = document.getElementById('gif'),
        n = document.getElementById('githubProf')
    ;(n.src = e),
        (n.src = r.addEventListener('submit', (t) => {
            t.preventDefault()
            const e = new FormData(r).get('search-bar')
            '' !== e &&
                (async function (t) {
                    const e = new URL('https://api.giphy.com/v1/gifs/translate')
                    e.searchParams.append('api_key', 'XKelAPHESxBXFhHXS8Hv8Ou4VzWbEbhy'), e.searchParams.append('s', t)
                    try {
                        let t = await fetch(e)
                        if (!t.ok) throw new Error(`${t.status}`)
                        {
                            let e = await t.json()
                            if ('' === e.meta.response_id) throw new Error('Something wrong with GIPHY systems.')
                            ;(a.alt = e.data.alt_text),
                                (a.src = e.data.images.original.webp),
                                (a.className = 'active'),
                                console.log(e)
                        }
                    } catch (t) {
                        console.error(t)
                    }
                })(e)
        }))
})()
