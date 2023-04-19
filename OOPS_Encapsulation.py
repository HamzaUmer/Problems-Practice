"""
Encapsulation(Protecting Our Data):
Encapsulation refers to the process of hiding implementation details and only exposing necessary information to the user. 
In Python, encapsulation can be achieved by using private variables and methods.
"""

class Person:
    def __init__(self, name, age):
        self.__name = name # private variable
        self.__age = age # private variable

    def display(self):
        print("Name:", self.__name)
        print("Age:", self.__age)

p = Person("John", 30)
p.display()
# output: Name: John
#         Age: 30
# print(p.__name) # Error: 'Person' object has no attribute '__name'

"""
In the above example, the name and age variables are private, and can only be accessed using the display() method.
Attempting to access the __name variable outside the class will result in an error.
"""
