export function getImageUrl({ person, size = 's' }) {
    const baseURL = 'https://i.imgur.com/';
    const extension = '.jpg';
    return (
        baseURL +
        person.imageId +
        size +
        extension
    );
}