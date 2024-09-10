import os
import shutil

# 创建 trainset 和 valset 文件夹
os.makedirs("trainset", exist_ok=True)
os.makedirs("valset", exist_ok=True)

# 拷贝 train.txt 中的图片
with open("train.txt", "r", encoding="utf-8") as train_file:
    for line in train_file:
        path = line.strip().split()[0]  # 提取图片路径
        image_path = path  # 构建图片路径
        shutil.copy(image_path, "trainset")  # 拷贝图片到 trainset 文件夹中

# 拷贝 val.txt 中的图片
with open("val.txt", "r", encoding="utf-8") as val_file:
    for line in val_file:
        path = line.strip().split()[0]  # 提取图片路径
        image_path = path  # 构建图片路径
        shutil.copy(image_path, "valset")  # 拷贝图片到 valset 文件夹中

print("生成完毕")