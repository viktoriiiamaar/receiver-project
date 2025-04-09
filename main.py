def on_received_value(name, value):
    if name == "Do this:":
        # do something with value (e.g., store in a list, print it, etc.)
        basic.show_number(value)

radio.on_received_value(on_received_value)
radio.set_group(1)
