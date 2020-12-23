data = list(map(int, input().split(' ')))

asending = True
descending = True

for i in range(1, 8):
    if data[i] > data[i-1]:
        descending = False
    elif data[i] < data[i-1]:
        asending = False

if asending:
    print("ascending")
elif descending:
    print("descending")
else:
    print("mixed")