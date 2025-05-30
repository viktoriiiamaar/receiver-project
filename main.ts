radio.onReceivedValue(function on_received_value(name: string, value: number) {
    basic.pause(1000)
    if (name == "step") {
        // when receiving values decode them according to the numbers assigned
        //  previously in the vode
        if (value == 1) {
            serial.writeLine("Go forward")
        } else if (value == 2) {
            serial.writeLine("Go to the left")
        } else if (value == 3) {
            serial.writeLine("Go to the right")
        } else if (value == 4) {
            serial.writeLine("Magnet found!")
        } else if (value == 0) {
            serial.writeLine("Dead end. Heading back to the last intersection")
        } else if (value == 5) {
            serial.writeLine("Turning around.")
        }
        
    }
    
    if (name == "int") {
        // if dead end was encountered, track how many grids the robot has to travel 
        //  in order to return back to intersection
        serial.writeValue("Number of grids to the last intersection", value)
    }
    
})
radio.setGroup(1)
