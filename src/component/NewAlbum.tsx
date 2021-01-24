import { FC } from 'react'
import Typography from '@material-ui/core/Typography'

type Props = {
    show: boolean
}

const NewAlbum: FC<Props> = () => {
    return (
        <div>
            <Typography variant="h6" color="inherit" noWrap>
                Add New album
            </Typography>
        </div>
    )
}

export default NewAlbum
