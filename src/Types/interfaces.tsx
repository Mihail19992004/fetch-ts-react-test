export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}
export interface ITodos {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
export interface IPhotos {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}
export interface IAlbums {
    userId: number,
    id: number,
    title: string
}
export interface IComments {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}