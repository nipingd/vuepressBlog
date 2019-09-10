以下题解来自:<https://github.com/azl397985856/leetcode>

## [有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)

这是一道比较简单的以栈为数据结构处理的算法题，先把左括号型('(','{'等)的压入栈中,然后取出字符串剩余的依次跟栈顶匹配，匹配成功就弹出，失败则返回false，字符串匹配完，栈里还剩下元素，说明还不是一个有效的括号，返回false,代码如下:

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const mapper = {
        '{': "}",
        "[": "]",
        "(": ")"
    }//这里加上对象映射，方便循环里去处理，不用写多余的if-else语句
    
    for(let i in s) {
        if (['(', '[', '{'].includes(s[i])) {
            stack.push(s[i]);
        } else {
            const temp = stack.pop();
            if (s[i] !== mapper[temp]) {
                return false;
            }
        }
    }
  if(stack.length>0)return false;

    return true;
};
```

## [删除排序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)

由于这道题是已经排好序的数组，本来处理起来会比较方便，但是题目要求不适用额外的素组空间，据此我的做法是设置一个temp指向i项，比较数组的i项，相等则删除i，不相等则temp等于i值，然后i++；代码如下：

```js
/**
 * @param {number[]} nums
 * @return {number}
 */

//我自己的做法
// var removeDuplicates = function(nums) {
//     let temp=nums[0];
//     let i=1;
//   while(i<nums.length){
//     if(temp===nums[i]){
//         nums.splice(i,1);
//       }else{
//         temp=nums[i];
//         i++;
//       }
//   }
//   return nums.length
// };
var removeDuplicates = function(nums) {
  let oldIndex=0;
  for(let newIndex=0;newIndex<nums.length;newIndex++){
    if(nums[newIndex] !== nums[oldIndex]){
      oldIndex++;
      nums[oldIndex] = nums[newIndex];
    }
  }
  return oldIndex+1;
}
```

## [最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)

跳转<https://github.com/azl397985856/leetcode/blob/master/problems/53.maximum-sum-subarray-cn.md>

类似的题:<https://leetcode-cn.com/problems/maximum-product-subarray/>

​				<https://leetcode-cn.com/problems/longest-turbulent-subarray/>