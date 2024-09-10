from collections import defaultdict
import re

# 读取 train_label.txt 文件
with open("../train_label.txt", "r", encoding="utf-8") as file:
    lines = file.readlines()

# 初始化一个 defaultdict 来存放每个非汉字的出现次数
non_chinese_char_count = defaultdict(int)

# 遍历每一行，计算每个非汉字的出现次数
for line in lines:
    _, label = line.strip().split("\t")
    non_chinese_chars = re.findall(r'[^\u4e00-\u9fa5]', label)  # 使用正则表达式找到非汉字字符
    for char in non_chinese_chars:
        non_chinese_char_count[char] += 1

# 按照出现次数从大到小排序
sorted_non_chinese_char_count = sorted(non_chinese_char_count.items(), key=lambda x: x[1], reverse=True)

# 将结果写入 status.txt 文件
with open("status.txt", "w", encoding="utf-8") as file:
    for char, count in sorted_non_chinese_char_count:
        file.write(f"{char}\t{count}\n")
