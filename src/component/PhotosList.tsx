import { memo } from 'react'
import { S3Image } from 'aws-amplify-react'
import { Divider } from 'semantic-ui-react'

type props = {
    photos: any
}

const PhotosList = memo(({ photos }: props) => {
    console.log('photos')
    console.log(photos)
    const PhotoItems = (props) => {
        console.log('props')
        console.log(props)
        console.log(props.photos)
        return props.photos.map((photo) => (
            <S3Image
                key={photo.thumbnail.key}
                imgKey={'resized/' + photos.thumbnail.key.replace(/.+resized\//, '')}
                level="private"
                style={{ display: 'inline-block', paddingRight: '5px' }}
            />
        ))
    }
    return (
        <div>
            <Divider hidden />
            <PhotoItems photos={photos} />
        </div>
    )
})

export default PhotosList
