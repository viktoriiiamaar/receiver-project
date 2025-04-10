def on_received_value(name, value):
    if name == "step":
        serial.write_number(value)
        serial.write_line("")  # Move to next line

radio.on_received_value(on_received_value)
radio.set_group(1)
