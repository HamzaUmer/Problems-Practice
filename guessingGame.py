import random

# Define a list of alphabet
alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

# Choose a random alphabet from the list
secret_alphabet = random.choice(alphabet)

# Initialize the number of attempts to 0
num_attempts = 0

# Define a while loop that continues until the user guesses the secret alphabet or exceeds the maximum number of attempts
while num_attempts < 5:
    # Get the user's guess
    guess = input("Guess a letter: ")
    
    # Increment the number of attempts
    num_attempts += 1
    
    # Check if the guess is correct
    if guess == secret_alphabet:
        print("Congratulations! You guessed the secret letter in", num_attempts, "attempts!")
        break
    else:
        print("Sorry, that's not the secret letter.")
        
# If the user exceeds the maximum number of attempts, print a message indicating that they lost the game
if num_attempts == 5:
    print("Sorry, you exceeded the maximum number of attempts. The secret letter was", secret_alphabet)
