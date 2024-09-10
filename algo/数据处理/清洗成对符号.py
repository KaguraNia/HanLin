import re

# 定义要成对出现的括号类型
paired_brackets = {'《》', '[]', '{}', '“”', '【】','()','（）'}

# 读取 train_label.txt 文件
with open("../train_label.txt", "r", encoding="utf-8") as file:
    lines = file.readlines()

# 删除不成对出现的括号以及标签为空的行
filtered_lines = []
for line in lines:
    parts = line.strip().split("\t")
    if len(parts) == 2:  # 确保行中有两个部分
        path, label = parts
        # 检查标签中是否有不成对出现的括号
        for bracket_pair in paired_brackets:
            if label.count(bracket_pair[0]) != label.count(bracket_pair[1]):
                # 如果不成对出现则删除该括号
                label = label.replace(bracket_pair[0], '').replace(bracket_pair[1], '')
        # 如果标签内容不为空，则将该行添加到结果中
        if label.strip() != '':
            filtered_lines.append(f"{path}\t{label}\n")

# 将结果写回 train_label.txt 文件中
with open("../train_label.txt", "w", encoding="utf-8") as file:
    file.writelines(filtered_lines)
