# 修改 train.txt 中的路径
with open("train.txt", "r", encoding="utf-8") as train_file:
    train_lines = train_file.readlines()

with open("train.txt", "w", encoding="utf-8") as train_file:
    for line in train_lines:
        path, label = line.strip().split("\t")  # 提取路径和标签
        path = path.replace("train/", "trainset/")  # 替换路径中的 "train/" 为 "trainset/"
        train_file.write(f"{path}\t{label}\n")  # 写入修改后的行

# 修改 val.txt 中的路径
with open("val.txt", "r", encoding="utf-8") as val_file:
    val_lines = val_file.readlines()

with open("val.txt", "w", encoding="utf-8") as val_file:
    for line in val_lines:
        path, label = line.strip().split("\t")  # 提取路径和标签
        path = path.replace("train/", "valset/")  # 替换路径中的 "train/" 为 "valset/"
        val_file.write(f"{path}\t{label}\n")  # 写入修改后的行



