# leetcode 刷题
## 简单
#### 1. 两数之和
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
> 给定 nums = [2, 7, 11, 15], target = 9
> 因为 nums[0] + nums[1] = 2 + 7 = 9
> 所以返回 [0, 1]

##### 测试代码
``` js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
    var twoSum = function(nums, target) {
      for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
            return [i, j];
          }
        }
      }
    }

   var twoSum = function(nums, target) {
      for (let i = 0; i < nums.length; i++) {
        var tmp = target - nums[i];
        if (nums.indexOf(tmp, i) != -1) {
          return [i, nums.indexOf(tmp, i)];
        }
      }
    }
```

#### 2. 整数反转

给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
> 输入: 123
> 输出: 321

> 输入: -123
> 输出: -321

> 输入: 120
> 输出: 21

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0

```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var min = -(1 << 30) * 2;
      var max = (1 << 30) * 2 - 1;
      var tmp = (x + "").split("");
      if (x < 0) tmp.shift();
      tmp = tmp.reverse().join("");
      tmp = x > 0 ? +tmp : +tmp * -1;
      if (tmp < min || tmp > max) {
        return 0;
      } else {
        return tmp;
      }
};

```