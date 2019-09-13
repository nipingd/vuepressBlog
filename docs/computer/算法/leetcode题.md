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

## [无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

https://github.com/azl397985856/leetcode/blob/master/problems/3.longestSubstringWithoutRepeatingCharacters.md

## [最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring/)

<https://github.com/azl397985856/leetcode/blob/master/problems/5.longest-palindromic-substring.md>

## [合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/)

<https://github.com/azl397985856/leetcode/blob/master/problems/88.merge-sorted-array.md>

## [二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)

用递归<https://github.com/azl397985856/leetcode/blob/master/problems/104.maximum-depth-of-binary-tree.md>

## [买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)

<https://github.com/azl397985856/leetcode/blob/master/problems/121.best-time-to-buy-and-sell-stock.md>

## [买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)

<https://github.com/azl397985856/leetcode/blob/master/problems/122.best-time-to-buy-and-sell-stock-ii.md>

## [验证回文串](https://leetcode-cn.com/problems/valid-palindrome/)

设置两个指针，一个指向头，一个指向尾，遇到其他字符时都向中间+1，有效字符就比较相同则left与right向中间+1，不同则返回false

<https://github.com/azl397985856/leetcode/blob/master/problems/125.valid-palindrome.md>

## [只出现一次的数字](https://leetcode-cn.com/problems/single-number/)

利用异或的性质，任何数和自身异或为0，所以每个两次出现的数字异或后都为0.任何数与0异或是本身，所以就可求出那个出现一次的数字

1. 异或的规律

- 任何数和本身异或则为`0`
- 任何数和 0 异或是`本身`

<https://github.com/azl397985856/leetcode/blob/master/problems/136.single-number.md>

## [最小栈](https://leetcode-cn.com/problems/min-stack/)

<https://github.com/azl397985856/leetcode/blob/master/problems/155.min-stack.md>

## [两数之和 II - 输入有序数组](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)

<https://github.com/azl397985856/leetcode/blob/master/problems/167.two-sum-ii-input-array-is-sorted.md>

## [阶乘后的零](https://leetcode-cn.com/problems/factorial-trailing-zeroes/)

<https://leetcode-cn.com/problems/factorial-trailing-zeroes/submissions/>

## [求众数](https://leetcode-cn.com/problems/majority-element/)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
//我自己的做法，空间复杂度高,其实测试后发现相差不大- -
// var majorityElement = function(nums) {
//   let obj = {};
//   let len = Math.floor((nums.length)/2);
//   for(let i = 0;i < nums.length;i++){
//     if(obj[nums[i]]){
//       obj[nums[i]]++;
//     }else{
//       obj[nums[i]] = 1;
//     }
//   }
//   for(let i in obj){
//     if(obj[i] > len){
//       return i;
//     }
//   }
// };

var majorityElement = function(nums) {
  let count = 1;
    let majority = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if (count === 0) {
            majority = nums[i];
        }
        if (nums[i] === majority) {
            count ++;
        } else {
            count --;
        }
    }
    return majority;
};
```

## [颠倒二进制位](https://leetcode-cn.com/problems/reverse-bits/)

- n & 1 === 1, 说明n的最后一位是1
- n & 1 === 0, 说明n的最后一位是0

<https://github.com/azl397985856/leetcode/blob/master/problems/190.reverse-bits.md>

## [位1的个数](https://leetcode-cn.com/problems/number-of-1-bits/)

<https://github.com/azl397985856/leetcode/blob/master/problems/191.number-of-1-bits.md>

这里用一个trick， 可以轻松求出。 就是`n & (n - 1)` 可以`消除` n 最后的一个1的原理。

这样我们可以不断进行`n = n & (n - 1)`直到n === 0 ， 说明没有一个1了。 这个时候`我们消除了多少1变成一个1都没有了， 就说明n有多少个1了`。

## [打家劫舍](https://leetcode-cn.com/problems/house-robber/)

思路还是和其他简单的动态规划问题一样，我们本质上在解决`对于第[i] 个房子，我们抢还是不抢。`的问题。

判断的标准就是总价值哪个更大， 那么对于抢的话`就是当前的房子可以抢的价值 + dp[i - 2]`

> i - 1 不能抢，否则会触发警铃

如果不抢的话，就是`dp[i - 1]`.

> 这里的 dp 其实就是`子问题`.

状态转移方程也不难写`dp[i] = Math.max(dp[i - 2] + nums[i - 2], dp[i - 1]);`（注：这里为了方便计算，令 `dp[0]`和 `dp[1]`都等于 0，所以 `dp[i]`对应的是 `nums[i - 2]`）

<https://github.com/azl397985856/leetcode/blob/master/problems/198.house-robber.md>

## [移除链表元素](https://leetcode-cn.com/problems/remove-linked-list-elements/)

<https://github.com/azl397985856/leetcode/blob/master/problems/203.remove-linked-list-elements.md>

## [反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)

<https://github.com/azl397985856/leetcode/blob/master/problems/206.reverse-linked-list.md>

## [存在重复元素 II](https://leetcode-cn.com/problems/contains-duplicate-ii/)

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
//我自己的暴力做法
// var containsNearbyDuplicate = function(nums, k) {
//   for(let i = 0;i < nums.length;i++){
//     for(let j = i+1;j < nums.length;j++){
//       if(nums[i] === nums[j] && Math.abs(j-i) <= k){
//         return true
//       }
//     }
//   }
//   return false;
// };

var containsNearbyDuplicate = function(nums, k) {
  let obj = {}
  for(let i = 0;i < nums.length;i++){
    if(obj[nums[i]]!==undefined && Math.abs(i - parseInt(obj[nums[i]])) <= k){
      return true;
    }else{
      obj[nums[i]] = i;
    }
  }
  console.log(obj)
  return false;
};
```

<https://github.com/azl397985856/leetcode/blob/master/problems/219.contains-duplicate-ii.md>

## [ 翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/)

<https://github.com/azl397985856/leetcode/blob/master/problems/226.invert-binary-tree.md>

## [丑数](https://leetcode-cn.com/problems/ugly-number/)

<https://github.com/azl397985856/leetcode/blob/master/problems/263.ugly-number.md>

## [移动零](https://leetcode-cn.com/problems/move-zeroes/)

<https://github.com/azl397985856/leetcode/blob/master/problems/283.move-zeroes.md>

## [4的幂](https://leetcode-cn.com/problems/power-of-four/)

<https://github.com/azl397985856/leetcode/blob/master/problems/342.power-of-four.md>

## [两个数组的交集](https://leetcode-cn.com/problems/intersection-of-two-arrays/)

<https://github.com/azl397985856/leetcode/blob/master/problems/349.intersection-of-two-arrays.md>

## [路径总和 III](https://leetcode-cn.com/problems/path-sum-iii/)

<https://github.com/azl397985856/leetcode/blob/master/problems/437.path-sum-iii.md>

## [两整数之和](https://leetcode-cn.com/problems/sum-of-two-integers/)

<https://github.com/azl397985856/leetcode/blob/master/problems/371.sum-of-two-integers.md>

## [分糖果](https://leetcode-cn.com/problems/distribute-candies/)

<https://github.com/azl397985856/leetcode/blob/master/problems/575.distribute-candies.md>

## [两数相加](https://leetcode-cn.com/problems/add-two-numbers/)

<https://github.com/azl397985856/leetcode/blob/master/problems/2.addTwoNumbers.md>

## [盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water/)

<https://github.com/azl397985856/leetcode/blob/master/problems/11.container-with-most-water.md>

## [三数之和](https://leetcode-cn.com/problems/3sum/)

<https://github.com/azl397985856/leetcode/blob/master/problems/15.3-sum.md>

