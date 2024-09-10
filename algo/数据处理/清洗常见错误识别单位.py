import re
# 读取 train_label.txt 文件
with open("../train_label.txt", "r", encoding="utf-8") as file:
    lines = file.readlines()

# 删除符合规则的行以及标签为空的行
filtered_lines = []
for line in lines:
    parts = line.strip().split("\t")
    if len(parts) == 2:  # 确保行中有两个部分
        path, label = parts
        # 检查标签内容是否为空
        if label.strip() == '':
            continue
        # 删除连续三个以上的 '口'
        if '口口口' in label:
            continue
        # 删除不成对连续出现的 '—'
        label = re.sub(r'[^-](?=-)', '', label)
        # 如果标签内容不为空，则将该行添加到结果中
        if label.strip() != '':
            filtered_lines.append(f"{path}\t{label}\n")

# 将结果写回 train_label.txt 文件中
with open("../train_label.txt", "w", encoding="utf-8") as file:
    file.writelines(filtered_lines)
