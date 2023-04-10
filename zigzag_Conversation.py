#Zigzag Conversation
# The string "PAYPALISHIRING" is written 
# in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

def convertToZigZag(s, numRows):
    if numRows == 1:
        return s
    
    rows = ['' for _ in range(numRows)]
    currRow = 0
    direction = -1
    
    for char in s:
        rows[currRow] += char
        if currRow == 0 or currRow == numRows - 1:
            direction *= -1
        currRow += direction
        
    return ''.join(rows)

s = "PAYPALISHIRING"
numRows = 3

zigzag = convertToZigZag(s, numRows)
print(zigzag) # "PAHNAPLSIIGYIR"
