def reverse_string(word):
    s = ""
    for i in range(len(word)-1, -1, -1):
        s += word[i]
    return s

print(reverse_string("Bunny"))
