import styles from './styles.css'
import myKey from '../ignore/myKey.js'
import github from './assets/github-mark.png'

const form = document.querySelector('form')
const imageElem = document.getElementById('gif')

const githubLogo = document.getElementById('githubProf')
githubLogo.src = github

githubLogo.src = form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    const searchQuery = formData.get('search-bar')

    if (searchQuery !== '') {
        fetchGIF(searchQuery)
    }
})

async function fetchGIF(searchQuery) {
    const gifURL = new URL('https://api.giphy.com/v1/gifs/translate')
    gifURL.searchParams.append('api_key', myKey)
    gifURL.searchParams.append('s', searchQuery)

    try {
        let response = await fetch(gifURL)

        if (response.ok) {
            let gifData = await response.json()

            if (gifData.meta.response_id !== '') {
                imageElem.alt = gifData.data.alt_text
                imageElem.src = gifData.data.images.original.webp
                imageElem.className = 'active'
            } else {
                throw new Error(`Something wrong with GIPHY systems.`)
            }

            console.log(gifData)
        } else {
            throw new Error(`${response.status}`)
        }
    } catch (err) {
        console.error(err)
    }
}
