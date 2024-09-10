import random

# 读取 train_label.txt 文件
with open("../train_label.txt", "r", encoding="utf-8") as file:
    lines = file.readlines()

# 计算切分点
split_index = int(len(lines) * 0.97)

# 随机打乱
random.shuffle(lines)

# 分发到 train.txt 和 val.txt 中
train_lines = lines[:split_index]
val_lines = lines[split_index:]

# 随机打乱 train.txt 和 val.txt 中的内容
random.shuffle(train_lines)
random.shuffle(val_lines)

# 将结果写入 train.txt 文件中
with open("../train.txt", "w", encoding="utf-8") as train_file:
    train_file.writelines(train_lines)

# 将结果写入 val.txt 文件中
with open("../val.txt", "w", encoding="utf-8") as val_file:
    val_file.writelines(val_lines)
