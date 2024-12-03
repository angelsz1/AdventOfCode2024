import * as fs from 'node:fs';

abstract class Solution {
  constructor() {}
  part_one(): void {
    
  }
  part_two(): void {
    
  }

  get_input(): string {
    return fs.readFileSync('input.in', 'utf8');
  }

  run(): void {
    console.log("PART ONE\n")
    console.log(this.part_one())
    console.log("PART TWO")
    console.log(this.part_two())
  }
  
}

export {Solution}
