;(() => {
    'use strict'
    const e = document.querySelector('form'),
        t = document.getElementById('gif')
    e.addEventListener('submit', (a) => {
        a.preventDefault()
        const s = new FormData(e).get('search-bar')
        '' !== s &&
            (async function (e) {
                const a = new URL('https://api.giphy.com/v1/gifs/translate')
                a.searchParams.append('api_key', 'XKelAPHESxBXFhHXS8Hv8Ou4VzWbEbhy'), a.searchParams.append('s', e)
                try {
                    let e = await fetch(a)
                    if (!e.ok) throw new Error(`${e.status}`)
                    {
                        let a = await e.json()
                        if ('' === a.meta.response_id) throw new Error('Something wrong with GIPHY systems.')
                        ;(t.alt = a.data.alt_text),
                            (t.src = a.data.images.original.webp),
                            (t.className = 'active'),
                            console.log(a)
                    }
                } catch (e) {
                    console.error(e)
                }
            })(s)
    })
})()
