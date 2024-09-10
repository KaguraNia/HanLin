# 提供的字符集合
unnecessary_chars = {'口','☆', '★', '□', '▢', '‘', 'の', '⚪', '◯', '」', '↓', '➡', '／', '∣', '#','＃', '←', '↘', '「', '∽', '↘', '⇒', '⬇', '〇', '䧥', '↗', '⬆', '㬋', '▪', '❀', '㲻', '↙', '↖', '↕', '↔', '䫙', '『', '』', '`', '〖', '〗', '❤', '䧅', '㕠', '▲', '✙', '▣', '㘸', '※', '⊕'}

# 读取 train_label.txt 文件
with open("../train_label.txt", "r", encoding="utf-8") as file:
    lines = file.readlines()

# 删除包含不必要字符的行以及标签为空的行
filtered_lines = []
for line in lines:
    parts = line.strip().split("\t")
    if len(parts) == 2:  # 确保行中有两个部分
        path, label = parts
        if all(char not in label for char in unnecessary_chars):  # 如果标签中没有不必要字符
            filtered_lines.append(line)

# 将结果写回 train_label.txt 文件中
with open("../train_label.txt", "w", encoding="utf-8") as file:
    file.writelines(filtered_lines)


