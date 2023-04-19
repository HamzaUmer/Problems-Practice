"""
Abstraction:
Abstraction is the process of representing only essential features of an object while hiding the unnecessary details.
In Python, abstraction can be achieved using abstract classes and interfaces.
"""

from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def start(self):
        pass

    @abstractmethod
    def stop(self):
        pass

class Car(Vehicle):
    def start(self):
        print("Car started.")

    def stop(self):
        print("Car stopped.")

class Bike(Vehicle):
    def start(self):
        print("Bike started.")

    def stop(self):
        print("Bike stopped.")

vehicles = [Car(), Bike()]
for vehicle in vehicles:
    vehicle.start()
    vehicle.stop()

"""
In the above example, the Vehicle class is an abstract class with two abstract methods start() and stop(). 
The Car and Bike classes inherit from the Vehicle class and implement the start() and stop() methods.

The vehicles list contains objects of both the Car and Bike classes. When the start() and stop() methods 
are called on each object in the list, it prints the corresponding message for the respective vehicle.

Note that attempting to create an object of the Vehicle class directly will result in an error, 
since it is an abstract class and cannot be instantiated. This ensures that the start() and stop() 
methods are always implemented in the subclasses.
"""
