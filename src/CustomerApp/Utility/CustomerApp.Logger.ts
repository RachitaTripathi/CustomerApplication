//browser console
//email
//db
//file
export interface ILogger{
    Log();
}
export class ConsoleLogger implements ILogger{
    Log(){
        console.log("Using console logger");
    }
}
export class DbLogger implements ILogger{
    Log(){
        console.log("Using Db logger");
    }
}
export class FileLogger implements ILogger{
    Log(){
        console.log("Using File Logger");
    }
}