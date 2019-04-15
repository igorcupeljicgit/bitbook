class User {
    constructor(id, img, name, surname, about, comments, posts, created) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.surname = surname;
        this.about = about ? about.bio : "loading data...";
        this.company = about ? about.job : "loading data...";;
        this.position = about ? about.countryCode : "loading data...";;
        this.comments = comments;
        this.posts = posts;
        this.created = `${new Date(created).getDate()}.${new Date(created).getMonth() + 1}.${new Date(created).getFullYear()}`;
    }
}
export default User