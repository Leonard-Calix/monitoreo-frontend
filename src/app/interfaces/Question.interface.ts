export interface Question {
    id?: Number;
    description: String;
    type: String;
    state: Boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateQuestion {
    id?: Number;
    description: String;
    type: String;
    state: String;
}