export class Task {
    title: String ;
    
    enum status { newTask = 0, inProgress = 1, completed =2 };
    let taskStatus : status.newTask;

    constructor( String title) {
        this.title = title;
    }
}
