import React, {FC} from "react";
import {IPhotos} from "../Types/interfaces";
import '../Style/photolist.scss'
interface PhotoListProps {
    photos: IPhotos[]
}


export const PhotoList: FC<PhotoListProps> =({photos})=> {
    return (
        <div className='container__photos'>

            {
                photos.map(photo=>
                <div>
                    <h2>{photo.title}</h2>
                    <img src={photo.url} alt="photo"/>
                </div>)
            }
        </div>
    )
}