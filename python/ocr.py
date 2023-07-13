import cv2
import argparse
import numpy as np
import pytesseract
import sys 


if len(sys.argv)==2:
	img = cv2.imread(sys.argv[1])
	
	img = cv2.cvtColor(img, cv2.COLOR_RGB2GRAY) #added
	img = cv2.GaussianBlur(img, (5, 5), 0)    #added


	
	print(pytesseract.image_to_string(img))

elif len(sys.argv)<2:
	print("Enter second argument as image")

else:
	print("Too many arguments")
	print("Filename and path to image")


