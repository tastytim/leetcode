package medium

import "sort"

func subsetsWithDup(nums []int) [][]int {
    var subsets [][]int

    var backtrack func(start int, path []int)
    backtrack = func(start int, path []int) {
        copyArr := make([]int, len(path))
        copy(copyArr, path)
        subsets = append(subsets, copyArr)

        for i := start; i < len(nums); i++ {
            if i > start && nums[i] == nums[i-1] {
                continue
            }

            path = append(path, nums[i])
            backtrack(i+1, path)
            path = path[:len(path)-1]
        }
    }

    sort.Ints(nums)
    backtrack(0, []int{})

    return subsets
}