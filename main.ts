//  Move to next line
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    if (name == "step") {
        serial.writeNumber(value)
        serial.writeLine("")
    }
    
})
radio.setGroup(1)
