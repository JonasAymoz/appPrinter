import os, time, sys, json
sys.path.append('~/projets/printer')
from printer import ThermalPrinter

def print_text(text):
	p = ThermalPrinter(serialport=ThermalPrinter.SERIALPORT)
	p.print_text(text)

def initTicket():
	p = ThermalPrinter(serialport=ThermalPrinter.SERIALPORT)
	p.justify("C")
	p.print_text("-----//-----")
	p.linefeed()
	p.inverse()
	p.print_text("WEB SESSION\n")
	p.inverse(False)
	p.print_text("-----//----- \n\n")
	p.justify()

def footerTicket():	
	p = ThermalPrinter(serialport=ThermalPrinter.SERIALPORT)
	p.print_text("-----//-----")
	p.font_b()
	p.print_text(" \n Send this to google @1600 Amphitheatre Parkway Mountain View, CA 94043, USA")
	p.font_b(False)

if __name__ == '__main__':
	data=sys.argv[1]
	print_text(data)