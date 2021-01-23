import { atom } from 'recoil'

const albumState = atom({
    key: 'albums',
    default: [],
})

export default albumState
