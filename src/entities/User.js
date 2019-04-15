class User {
    constructor(id, img, name, surname, bio, company, countryCode, comments, posts, created) {
        this.id = id;
        this.img = img ;
        this.name = name ;
        this.surname = surname ;
        this.bio=bio ;
        this.company=company;
        this.countryCode=countryCode;
        this.comments = comments ;
        this.posts = posts ;
        this.created = `${new Date(created).getDate()}.${new Date(created).getMonth() + 1}.${new Date(created).getFullYear()}` || 0;
    }
}
export default User