radio.onReceivedValue(function on_received_value(name: string, value: number) {
    if (name == "Do this:") {
        //  do something with value (e.g., store in a list, print it, etc.)
        basic.showNumber(value)
    }
    
})
radio.setGroup(1)
