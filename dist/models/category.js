export class Category {
    genre;
    constructor(genre) {
        this.genre = genre;
    }
}
export class ClassicalLit extends Category {
    nationality;
    constructor(genre, nationality) {
        super(genre);
        this.nationality = nationality;
    }
}
export class Scientific extends Category {
    science;
    constructor(genre, science) {
        super(genre);
        this.science = science;
    }
}
export class Tale extends Category {
    content;
    constructor(genre, content) {
        super(genre);
        this.content = content;
    }
}
export class Fiction extends Category {
    constructor(genre) {
        super(genre);
    }
}
