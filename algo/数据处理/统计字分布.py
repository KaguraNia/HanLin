from collections import defaultdict

# 读取 train_label.txt 文件
with open("../train_label.txt", "r", encoding="utf-8") as file:
    lines = file.readlines()

# 初始化一个 defaultdict 来存放每个单字的出现次数
char_count = defaultdict(int)

# 遍历每一行，计算每个单字的出现次数
for line in lines:
    _, label = line.strip().split("\t")
    for char in label:
        char_count[char] += 1

# 按照出现次数从大到小排序
sorted_char_count = sorted(char_count.items(), key=lambda x: x[1], reverse=True)

# 将结果写入 status.txt 文件
with open("status.txt", "w", encoding="utf-8") as file:
    for char, count in sorted_char_count:
        file.write(f"{char}\t{count}\n")
