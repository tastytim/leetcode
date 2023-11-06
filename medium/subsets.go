package medium



func subsets(nums []int) [][]int {
    var arr = [][]int{}
    var backtrack func(start int, path []int)
    backtrack=func(start int, path []int){
        copyPath:=make([]int, len(path))
        copy(copyPath,path)
        arr=append(arr,copyPath)
       for i:=start; i < len(nums);i++{
           path=append(path,nums[i])
           backtrack(i+1, path)
           path = path[:len(path)-1]
       }
    }
    backtrack(0,[]int{})
    return arr
}