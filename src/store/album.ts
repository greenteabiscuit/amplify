import { atom } from 'recoil'

type Album = {
    createdAt: string
    id: string
    name: string
    owner: string
    timestamp: number
    updatedAt: string
}

const initialSample: Album = {
    createdAt: '',
    id: '',
    name: '',
    owner: '',
    timestamp: 0,
    updatedAt: '',
}

const aState = atom({
    key: 'album',
    default: initialSample,
})

export default aState
