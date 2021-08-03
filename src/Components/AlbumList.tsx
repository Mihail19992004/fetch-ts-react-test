import React, {FC} from "react";
import {IAlbums} from "../Types/interfaces";
import '../Style/albumlist.scss'
interface AlbumListProps {
    albums: IAlbums[]
}

export const AlbumList: FC<AlbumListProps> = ({albums}) => {
    return (
        <div className='container__albums'>
            {
                albums.map(album=>
                <div>
                    <h2>{album.title}</h2>
                </div>
                )
            }
        </div>
    )
}