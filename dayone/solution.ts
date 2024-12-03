import { Solution } from '../Helpers/solution.ts'

class DayOne extends Solution {
    constructor() {
        super()
        this.input = this.get_input()
    }

    part_one(): any {
        this.parse_input()
        this.arr1.sort()
        this.arr2.sort()
        return this.total_distance(this.arr1, this.arr2)
    }

    total_distance(arr1: number[], arr2: number[]): number {
        let len = arr1.length
        let dist = 0
        for (let i = 0; i < len; i++) {
            dist += this.abs(arr1[i] - arr2[i])
        }
        return dist
    }

    parse_input(): void {
        this.arr1 = []
        this.arr2 = []
        let lines = this.input.split('\n')
        lines.pop()
        for (let i = 0; i < lines.length; i++) {
            let items = lines[i].split('   ')
            this.arr1.push(items[0])
            this.arr2.push(items[1])
        }
    }

    abs(num: number): number {
        if (num < 0) {
            return num * -1
        }
        return num
    }
 
    part_two(): any {
        let total_count = 0
        for (let i = 0; i < this.arr1.length; i++) {
            let left_arr_index = 0
            let count = 0
            while (this.arr2[left_arr_index] < this.arr1[i] && left_arr_index < this.arr2.length) {
                left_arr_index++
            }
            while (this.arr2[left_arr_index] == this.arr1[i] && left_arr_index < this.arr2.length) {
                count++
                left_arr_index++
            }
            total_count += this.arr1[i] * count
            if (left_arr_index >= this.arr2.length) {
                return total_count
            }
        }
        return total_count
    }
}

(new DayOne()).run()
