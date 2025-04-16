def on_received_value(name, value):
    basic.pause(1000)
    if name == "step":
        if value == 1:
            serial.write_line("Go forward")
        elif value == 2:
            serial.write_line("Go to the left")
        elif value == 3:
            serial.write_line("Go to the right")
        elif value == 4:
            serial.write_line("Magnet found!")
        elif value == 0:
            serial.write_line("Dead end. Heading back to the last intersection")

radio.on_received_value(on_received_value)
radio.set_group(1)

