---
title: "Algorithm 101: Boyer–Moore majority vote"
date: 2021-05-28 13:30:22
categories: [""]
tags: ["algorithm", "算法"]
---

## Find out the mojority element

Use the Boyer-Moore majority vote algorithm to find out the mojority element, which appears more than (n/2) times.

```c
int majorityElement(vector<int>& nums) {
    int candidate = 0, count = 0;
        for (int num : nums) {
            if (count == 0) candidate = num;
            count += (candidate == num) ? 1 : -1;
        }
    return candidate;
}
```

### Explanation

When the variable `count` is going down to 0, which means the previous elements have canceled each other out. So the algorithm starts over again.
