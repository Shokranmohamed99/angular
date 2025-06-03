import {Pipe , PipeTransform} from "@angular/core";
@Pipe({
    name:'trim'
})
export class TrimPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
      console.log(value);
      console.log(args);
    }

}