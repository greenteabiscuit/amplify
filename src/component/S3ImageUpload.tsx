import React, { useState } from 'react'

import { Auth } from 'aws-amplify'
import Storage from '@aws-amplify/storage'

import { Form } from 'semantic-ui-react'

import { v4 as uuid } from 'uuid'

const S3ImageUpload = (props) => {
    const [uploading, setUploading] = useState(false)

    const uploadFile = async (file) => {
        const fileName = 'upload/' + uuid()
        const user = await Auth.currentAuthenticatedUser()

        const result = await Storage.vault.put(fileName, file, {
            metadata: {
                albumid: props.albumId,
                owner: user.username,
            },
        })
        console.log('Uploaded file: ', result)
    }

    const onChange = async (e) => {
        setUploading(true)

        const files = []
        for (let i = 0; i < e.target.files.length; i++) {
            files.push(e.target.files.item(i))
        }
        await Promise.all(files.map((f) => uploadFile(f)))

        setUploading(false)
    }

    return (
        <div>
            <Form.Button
                onClick={() => document.getElementById('add-image-file-input').click()}
                disabled={uploading}
                icon="file image outline"
                content={uploading ? 'Uploading...' : 'Add Images'}
            />
            <input
                id="add-image-file-input"
                type="file"
                accept="image/*"
                multiple
                onChange={onChange}
                style={{ display: 'none' }}
            />
        </div>
    )
}

export default S3ImageUpload
