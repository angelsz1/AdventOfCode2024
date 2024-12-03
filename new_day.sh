#! /bin/bash
numbers=(" " "one" "two" "three" "four" "five" "six" "seven" "eight" "nine" "ten" "eleven" "twelve" "thirteen" "fourteen" "fifteen" "sixteen" "seventeen" "eighteen" "nineteen" "twenty" "twenty-one" "twenty-two" "twenty-three" "twenty-four" "twenty-five")
Numbers=(" " "One" "Two" "Three" "Four" "Five" "Six" "Seven" "Eight" "Nine" "Ten" "Eleven" "Twelve" "Thirteen" "Fourteen" "Fifteen" "Sixteen" "Seventeen" "Eighteen" "Nineteen" "Twenty" "Twenty-One" "Twenty-Two" "Twenty-Three" "Twenty-Four" "Twenty-Five")
dir=$1
DAY=day${numbers[$dir]}

mkdir $DAY
touch $DAY/solution.ts
touch $DAY/input.in
cat <<EOF >> $DAY/solution.ts
import { Solution } from '../Helpers/solution.ts'

class Day${Numbers[$dir]} extends Solution {
    constructor() {
        super()
        this.input = this.get_input()
    }
    part_one(): any {
        //part one solution
    }

    part_two(): any {
        //part two solution
    }
}

(new Day${Numbers[$dir]}()).run()
EOF
