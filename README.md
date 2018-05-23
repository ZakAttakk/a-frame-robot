# a-frame-robot

THREE POINTS OF INTEREST:

1) In the example, the robot's "central reference point" is away from the actual robot (see HTML lines 20-23).  This means that when you increase the SCALE of the robot (by clicking on the red sphere), you're increasing not only the size of the robot but also its distance from its reference point.  In other words, increasing the robot's scale actually moves it away from its reference point.

This is also called a "dilation":
https://www.khanacademy.org/math/geometry-home/transformations/dilations-scaling/v/dilating-from-an-arbitrary-point-example

2) The .emit method can be a useful way to trigger animations.  (See JS lines 15-29 and HTML line 41)

3) If you're having trouble using .innerHTML += <...> (like I was), you might try using .cloneNode and .appendChild(clonedNode).  (See JS lines 60-65 and HTML lines 45-46.)  You can test it by clicking on the green box!
