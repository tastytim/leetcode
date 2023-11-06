package medium
import "unicode"



func letterCasePermutation(s string) []string {
    var arr []string


    var backtrack func(current string, index int)
    backtrack=func(current string , index int ){
       if index==len(s){
           arr=append(arr,current)
           return
       }

       backtrack(current + string(unicode.ToLower(rune(s[index]))), index+1)

       if unicode.IsLetter(rune(s[index])){
           backtrack(current + string(unicode.ToUpper(rune(s[index]))), index+1)
       }
    }

    backtrack("", 0)

    return arr
}

func main(){
    letterCasePermutation("abcd")
}







