import os, time, sys, json
sys.path.append('~/projets/printer')
from printer import ThermalPrinter
p = ThermalPrinter(serialport=ThermalPrinter.SERIALPORT)
# coding: utf8

def print_text(text):
	
	p.print_text(text)

def initTicket():

	p.justify("C")
	p.print_text("-----//-----")
	p.linefeed()
	p.inverse()
	p.print_text("WEB SESSION\n")
	p.inverse(False)
	p.print_text("-----//----- \n\n")
	p.justify()

def footerTicket():	

	p.print_text("-----//-----")
	p.font_b()
	p.print_text(" \n Send this to google @1600 Amphitheatre Parkway Mountain View, CA 94043, USA")
	p.font_b(False)

if __name__ == '__main__':
	initTicket()
	data=sys.argv[1]
	print('data : ' +data)
	a = json.loads(data)
	for key, value in a.items():
		stringToPrint = key +" ----  *"+ str(value.get('visitCount')) +"\n"
		print_text(stringToPrint.encode('utf8'))
	footerTicket()
	