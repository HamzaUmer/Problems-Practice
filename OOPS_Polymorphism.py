"""
Polymorphism(Different Behaviors at different instances):
Polymorphism is the ability of an object to take on many forms. 
In Python, polymorphism can be achieved using method overloading and method overriding.
"""

class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, length, breadth):
        self.length = length
        self.breadth = breadth

    def area(self):
        return self.length * self.breadth

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius * self.radius

class Sphere(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return (4/3) * 3.14 * self.radius * self.radius * self.radius

shapes = [Rectangle(5, 6), Circle(3), Sphere(7)]
for shape in shapes:
    print(shape.area())
    # Output: 30 (area of Rectangle), 28.26 (area of Circle), 1436.03(area of Sphere)

"""
In the above example, the Shape class has an area() method that is overridden in the Rectangle, Circle and Sphere classes.
The shapes list contains objects of both the Rectangle, Circle and Sphere classes. 
When the area() method is called on each object in the list, it returns the area of the corresponding shape.
"""
