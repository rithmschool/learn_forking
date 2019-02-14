""" Random function to create brocolli with recursion (sorta like fractals)
For practice @ rithm bootcamp  """

import turtle
import random

def branch(turtle, depth):
    """ Produces the main brocolli branches """

    if depth < 0:
        leaves(turtle, 2)
        return
    else:
        # Main stem
        turtle.forward((10-depth)*5)
        
        # Four branches
        turtle.right(20)
        branch(turtle, depth-1)
        turtle.left(10)
        branch(turtle, depth-1)
        turtle.left(20)
        branch(turtle, depth-1) 
        turtle.left(10)
        branch(turtle, depth-1)
        
        # Back to original position
        turtle.right(20)
        turtle.backward((10-depth)*5)

def leaves(turtle, depth):
    """ Creates the brocolli leaves """
    if depth < 0:
        return
    else:
        turtle.color('green')
        turtle.circle(5)
        turtle.forward(10)
        leaves(turtle, depth-1)
        turtle.backward(10)
        turtle.color('brown')
        
def make_brocolli(depth):
    """ Builds a recursive brocolli tree """

    broc = turtle.Turtle()
    wn = turtle.Screen()
    broc.speed(0)
    broc.setheading(90)
    broc.color("brown")
    branch(broc, depth)
    wn.exitonclick()

def main():
    make_brocolli(2)

if __name__ == "__main__":
    main()

    