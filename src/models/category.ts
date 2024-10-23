export class Category {
  constructor(public genre: string) {}  
}

export class ClassicalLit extends Category {  
  public nationality: string;

  constructor(genre: string, nationality: string) {
    super(genre);    
    this.nationality = nationality;
  }
}

export class Scientific extends Category {  
  public science: string;

  constructor(genre: string, science: string) {
    super(genre);      
    this.science = science;
  }
}

type substance = "fantasy" | "fable" | "epic" | "myth";
export class Tale extends Category {  
  public content: substance;

  constructor(genre: string, content: substance) {
    super(genre);    
    this.content = content;
  }
}

export class Fiction extends Category {  
  constructor(genre: string) {
    super(genre);    
  }
}