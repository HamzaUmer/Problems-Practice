"""
Inheritance:
Inheritance is the process of creating a new class from an existing class. 
The new class inherits all the properties and methods of the existing class and can also add new functionality to it.
"""

class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species

    def speak(self):
        print("I am an animal.")

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Dog")
        self.breed = breed

    def speak(self):
        print("Woof!")

d = Dog("Max", "Labrador")
print(d.name)
print(d.species)
d.speak() # Output: "Woof!"

"""
In the above example, the Dog class is derived from the Animal class.
The Dog class inherits the name and species properties from the Animal class and adds a new breed property.
It also overrides the speak() method of the Animal class with its own implementation.
"""
