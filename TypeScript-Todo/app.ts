// function totalLength (x: string, y:string):number
// function totalLength (x: any[], y:any[]):number
// function totalLength(x: (string | any[]) , y: (string | any[])): number {
//   var total: number = x.length + y.length;
//
//     x.slice(0)
//
//     if(x instanceof Array){
//       x.push('abc')
//     }
//
//     if(x instanceof String){
//       x.substr(1)
//     }
//
//
//     return total;
// }

interface Todo {
  name: string;
  completed?: boolean;
}

interface ITodoService {
  add(todo: Todo): Todo;
  delete(todoId: number): void;
  getAll(): Todo[];
  getById(todoId: number): Todo;

}

var todo: Todo = {
  name: 'be good'
};
