import random

questions = {
    "What is the capital of France?": {
        "A": "Madrid",
        "B": "Rome",
        "C": "Paris",
        "D": "Berlin",
        "answer": "C"
    },
    "What is the currency of Japan?": {
        "A": "Dollar",
        "B": "Pound",
        "C": "Yen",
        "D": "Euro",
        "answer": "C"
    },
    "What is the largest continent in the world?": {
        "A": "Europe",
        "B": "North America",
        "C": "Asia",
        "D": "South America",
        "answer": "C"
    },
    "What is the smallest country in the world?": {
        "A": "Vatican City",
        "B": "Monaco",
        "C": "San Marino",
        "D": "Liechtenstein",
        "answer": "A"
    },
    "What is the highest mountain in the world?": {
        "A": "Mount Kilimanjaro",
        "B": "Mount Everest",
        "C": "Mount McKinley",
        "D": "Mount Fuji",
        "answer": "B"
    },
}

rewards = {
    1: "$100",
    2: "$200",
    3: "$300",
    4: "$500",
    5: "$1,000",
    6: "$2,000",
    7: "$4,000",
    8: "$8,000",
    9: "$16,000",
    10: "$32,000",
    11: "$64,000",
    12: "$125,000",
    13: "$250,000",
    14: "$500,000",
    15: "$1,000,000",
}

def start_game():
    print("Welcome to Who Wants to Be a Millionaire!")
    for i in range(1, 16):
        print("Question", i, "for", rewards[i])
        question_text, question_data = random.choice(list(questions.items()))
        while ask_question(question_text, question_data) == False:
            print("You have one more chance.")
            if ask_question(question_text, question_data) == True:
                break
            print("Game over. You won", rewards[i-1])
            return
    print("Congratulations! You won $1,000,000!")

def ask_question(question_text, question_data):
    print(question_text)
    for option in question_data:
        if option != "answer":
            print(option + ": " + question_data[option])
    user_answer = input("Enter your answer (A/B/C/D): ")
    if user_answer.lower() == question_data["answer"].lower():
        print("Correct!")
        return True
    else:
        print("Incorrect!")
        return False
start_game()
