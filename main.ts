radio.onReceivedValue(function on_received_value(name: string, value: number) {
    if (name == "step") {
        if (value == 1) {
            serial.writeLine("Go forward")
        } else if (value == 2) {
            serial.writeLine("Go to the left")
        } else if (value == 3) {
            serial.writeLine("Go to the right")
        } else {
            serial.writeLine("Unknown command: " + ("" + value))
        }
        
    }
    
})
radio.setGroup(1)
