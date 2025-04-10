def on_received_value(name, value):
    if name == "step":
        if value == 1:
            serial.write_line("Go forward")
        elif value == 2:
            serial.write_line("Go to the left")
        elif value == 3:
            serial.write_line("Go to the right")
        else:
            serial.write_line("Unknown command: " + str(value))

radio.on_received_value(on_received_value)
radio.set_group(1)
