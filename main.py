def on_forever():
    def on_received_value(name, value):
        if name == "Do this:":
            basic.show_number(value)

    radio.on_received_value(on_received_value)
    radio.set_group(1)

basic.forever(on_forever)
