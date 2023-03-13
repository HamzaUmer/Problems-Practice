# define a 2D array
my_array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

# initialize the sum variable
total_sum = 0

# iterate over each element in the array and add it to the sum
for row in my_array:
  for val in row:
    total_sum += val

# print the total sum
print("The sum of the 2D array is:", total_sum)
