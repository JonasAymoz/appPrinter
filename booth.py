
import os, time, sys, json
sys.path.append('~/projets/printer')
from printer import ThermalPrinter


# Variables
photoPath = "/home/pi/Images/camera/"
photoName = time.strftime("%Y%m%d%H%M%S") + "_photobooth.jpg"
photoResize = 512, 384
photoTitle = "Jonas's Photo Booth!"


def print_text(text):
	p = ThermalPrinter(serialport=ThermalPrinter.SERIALPORT)
	p.justify("C")
	p.font_b()
	p.print_text("Super TEXT \n")
	p.font_b(False)
	p.print_text(text)
	p.linefeed()
	p.justify("C")

if __name__ == '__main__':
	data=sys.argv[1]
	#photo_callback()
	#print_from_imgpath(photoName + "thumbnail.jpg")
	print_text(data)