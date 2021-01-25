import { memo } from 'react'
import { S3Image } from 'aws-amplify-react'
import { Divider } from 'semantic-ui-react'
import Amplify from 'aws-amplify'

type props = {
    photos: any
}

const PhotosList = memo(({ photos }: props) => {
    console.log(photos)
    Amplify.configure({
        aws_project_region: process.env.project_region,
        aws_cognito_identity_pool_id: process.env.cognito_identity_pool_id,
        aws_cognito_region: process.env.cognito_region,
        aws_user_pools_id: process.env.user_pools_id,
        aws_user_pools_web_client_id: process.env.user_pools_web_client_id,
        oauth: {},
        aws_appsync_graphqlEndpoint: process.env.appsync_graphqlEndpoint,
        aws_appsync_region: process.env.appsync_region,
        aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
        aws_user_files_s3_bucket: process.env.user_files_s3_bucket,
        aws_user_files_s3_bucket_region: process.env.user_files_s3_bucket_region,
    })
    const PhotoItems = (props) => {
        console.log('props')
        console.log(props)
        return props.photos.map((photo) => (
            <S3Image
                key={photo.thumbnail.key}
                imgKey={'resized/' + photo.thumbnail.key.replace(/.+resized\//, '')}
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
