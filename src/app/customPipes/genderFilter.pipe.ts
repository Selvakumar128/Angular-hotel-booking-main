import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'genderFilter'
})
export class genderFilterPipe implements PipeTransform{
    transform(items: any[], selectedGender: string): any[] {
        if (selectedGender === 'all') {
          return items;
        }
        return items.filter(item => item.gender === selectedGender);
      }
}