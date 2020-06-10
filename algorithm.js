//希尔排序
function sortArray(nums) {
    let len = nums.length / 2
    while (len) {
        for (let i = len; i < nums.length; i++) {
            let rightTeam = nums[i]
            for (let j = i - len; j >= 0; j -= len) {
                if (rightTeam < nums[j]) {
                    nums[j + len] = nums[j];
                    nums[j] = rightTeam
                } else {
                    break;
                }
            }
        }
        len = parseInt(len / 2)
    }
    return nums
};

//动态规划
//最少硬币找零
function MinCoinChange(coins) {
    // coins是有多少种面额的钱币。
    // 这里我们直接把构造函数传进来的参数用私有变量存储一下。
    var coins = coins;
    // 缓存结果集的变量对象
    var cache = {};
    // 定义一个构造函数的私有方法，
    this.makeChange = function (amount) {
        // 这里的this指向的就是this.makeChange私有函数本身，把它赋值给一个变量是为了不用在每次调用的时候都要计算（个人见解）
        var me = this;
        // amount就是我们要找零的钱数，如果为非正数，直接返回空数组，因为你找零的钱数不应该为负数。
        if(!amount) {
            return [];
        };
        
        // cache[amount]的判断是为了在重复计算前面已经计算过的结果时可以直接返回结果
        // 避免重复计算所造成的时间浪费
        if(cache[amount]) {
            return cache[amount];
        };
        // min用来存储最终结果的数组，newMin和newAmount分别是在逻辑的执行过程中，用于存储当前的符合条件的找零数组和找零钱数的。
        var min = [],newMin,newAmount;
        // 我们循环coins的长度。通过循环，我们为每一个conis数组中的面额都进行下面的逻辑操作。（主要是为当前coin做递归）
        for(var i = 0; i < coins.length; i++) {
            // 选择coins中的当前面额。
            var coin = coins[i];
            // 我们用要找零的钱数减去当前要找零的面额。并存储为newAmount变量。
            newAmount = amount - coin;
            // 在当前循环的递归中，如果newAmount是不小于0的值，也就是合法的找零的钱数，我们同样为该数调用找零方法。
            // 这里就是有点类似分而治之的那种策略了，递归求解。
            if(newAmount >= 0) {
                newMin = me.makeChange(newAmount);
            };
            // 在前面符合条件的newAmount递归后会进入下一个值得逻辑执行，然后就会到这里的逻辑判断
            // 下面的if判断主要是判断是否是当前的最优解，如果是，那么就放入我们最终的数组内。
            console.log(!min.length,min.length)
            if(newAmount >= 0 && (newMin.length < min.length - 1 || !min.length) && (newMin.length || !newAmount)) {
                min = [coin].concat(newMin);
                //console.log('new Min' + min + 'for' + amount);
            }
        };
        //cache存储了1到amount之间的所有结果
        //console.log(cache)
        return (cache[amount] = min);
    };
};

var minCoinChange = new MinCoinChange([1,5,10,25]);
console.log(minCoinChange.makeChange(36))

// 贪心算法
function MinCoinChange(coins) {
    var coins = coins;
    this.makeChange = function (amount) {
        var change = [],total = 0;
        for(var i = coins.length; i >= 0; i--) {
            var coin = coins[i];
            while(total + coin <= amount) {
                change.push(coin);
                total += coin;
            }
        }
        return change;
    };
}

var minCoinChange = new MinCoinChange([1,5,10,25]);
console.log(minCoinChange.makeChange(36))
