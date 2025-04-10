radio.onReceivedValue(function on_received_value(name: string, value: number) {
    basic.pause(1000)
    if (name == "step") {
        if (value == 1) {
            serial.writeLine("Go forward")
        } else if (value == 2) {
            serial.writeLine("Go to the left")
        } else if (value == 3) {
            serial.writeLine("Go to the right")
        }
        
    }
    
})
radio.setGroup(1)
